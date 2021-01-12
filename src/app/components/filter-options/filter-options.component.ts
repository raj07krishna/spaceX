import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IParamsKey{
  selectedFilter : string,
  isLaunchSuccessful: boolean,
  isLandingSuccessful: boolean
}

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {

  @Output() data = new EventEmitter<{
    selectedFilter?: string;
    isLaunchSuccessful?: boolean;
    isLandingSuccessful?: boolean

  }>()
  filters=['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
  @Input() selectedFilter: string | null = ''
  @Input() isLaunchSuccessful: boolean | undefined = undefined
  @Input() isLandingSuccessful: boolean | undefined= undefined
  Math: any;
  constructor() {
    this.Math = Math;
   }

  ngOnInit(): void {
  }

  changeValue(i:number){
    this.selectedFilter = this.filters[i]
    this.updateValue()
  }

  updateValue(){
    let params = {} as IParamsKey
    if(this.selectedFilter?.length){
      params['selectedFilter'] = this.selectedFilter
    }
    if(this.isLaunchSuccessful !== undefined){
      params['isLaunchSuccessful'] = this.isLaunchSuccessful
    }
    if(this.isLandingSuccessful !== undefined){
      params['isLandingSuccessful'] = this.isLandingSuccessful
    }
    this.data.emit(params)
  }

}
