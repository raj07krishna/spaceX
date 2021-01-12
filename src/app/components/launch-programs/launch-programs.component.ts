import { Component, Input, OnInit } from '@angular/core';
import { FetchDetailsService } from 'src/app/services/fetch-details.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.scss']
})
export class LaunchProgramsComponent implements OnInit {

  @Input() spaceXData = []
  constructor() { }

  ngOnInit(): void {}

}
