import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDetailsService } from 'src/app/services/fetch-details.service';

@Component({
  selector: 'app-launch-home',
  templateUrl: './launch-home.component.html',
  styleUrls: ['./launch-home.component.scss']
})
export class LaunchHomeComponent implements OnInit {
  spaceXData = []
  params = new HttpParams();
  selectedFilter: string | null = ''
  isLaunchSuccessful: boolean | undefined = undefined
  isLandingSuccessful: boolean | undefined= undefined
  constructor(private fetchDetails: FetchDetailsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.extractUrl()
  }

  updateParams(event:any){
    this.params = new HttpParams()
    if (event && Object.keys(event).length > 0) {
      if (Object.keys(event).indexOf('selectedFilter') > -1) {
       this.params = this.params.append('launch_year', `${event.selectedFilter}`);
      }
      if (Object.keys(event).indexOf('isLandingSuccessful') > -1) {
        this.params = this.params.append('land_success', `${event.isLandingSuccessful}`);
      }
      if (Object.keys(event).indexOf('isLaunchSuccessful') > -1) {
        this.params = this.params.append('launch_success', `${event.isLaunchSuccessful}`);
      }
    }
    this.callApi()
  }

  callApi(){
    this.updateUrl()
    this.fetchDetails.fetchData(this.params).subscribe(data => {
      this.spaceXData = data
   })
  }

  extractUrl(){
    this.params = new HttpParams()
    if(this.route.snapshot.queryParamMap.get('limit')){
      this.params = this.params.append('limit', `${this.route.snapshot.queryParamMap.get('limit')}`);
    } else {
      this.params = this.params.append('limit','100')
    }
    if(this.route.snapshot.queryParamMap.get('launch_year')){
      this.selectedFilter = this.route.snapshot.queryParamMap.get('launch_year')
      this.params = this.params.append('launch_year', `${this.selectedFilter}`);
    }
    if(this.route.snapshot.queryParamMap.get('land_success')){
      this.isLandingSuccessful = Boolean(this.route.snapshot.queryParamMap.get('land_success'))

      this.params = this.params.append('land_success', `${this.isLandingSuccessful}`);
    }
    if(this.route.snapshot.queryParamMap.get('launch_success')){
      this.isLaunchSuccessful = Boolean(this.route.snapshot.queryParamMap.get('launch_success'))
      this.params = this.params.append('launch_success', `${this.isLaunchSuccessful}`);
    }
    console.log(this.params);
    console.log(this.selectedFilter,this.isLandingSuccessful,this.isLaunchSuccessful);
    
    this.fetchDetails.firstTimeFetchData(this.params).subscribe(data => {
      this.spaceXData = data
   })
  }

  updateUrl(){
    this.router.navigateByUrl(`?${this.params}`)
  }

}
