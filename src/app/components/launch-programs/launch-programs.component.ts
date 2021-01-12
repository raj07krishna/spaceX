import { Component, Input, OnInit } from '@angular/core';
import { ISpaceX } from 'src/app/models/spacex.moel';
import { FetchDetailsService } from 'src/app/services/fetch-details.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.scss']
})
export class LaunchProgramsComponent implements OnInit {

  @Input() spaceXData:ISpaceX[] = []
  constructor() { }

  ngOnInit(): void {}

}
