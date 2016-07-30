import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';

@Component({
  selector: 'epi-list-bangumi',
  template: `
  <GridLayout rows="29, 1, 60" columns="90, 10, *" cssClass="bangumi-item">
      <Image row="0" rowSpan="3" col="0"
        horizontalAlignment="center" verticalAlignment="center"
        src="~/images/{{bangumi.thumbnail}}" cssClass="personal-bangumi-thumbnail">
      </Image>
      <Image row="0" rowSpan="3" col="1" src="~/img/barc.png"></Image>
      <Label row="0" col="2" text="{{bangumi.title}}" cssClass="personal-bangumi-title"></Label>
      <Label row="1" col="2" backgroundColor="#DDDDDD"></Label>
      
      <GridLayout row="2" col="2" rows="27, 33" columns="67, 10, 67, 10, *">
        <Label row="0" col="0" rowSpan="2" 
          horizontalAlignment="center"
          text="12" cssClass="personal-bangumi-data-large"></Label>

        <Image row="0" rowSpan="2" col="1" src="~/img/barm.png"
          verticalAlignment="scretch"></Image>

        <Label row="0" col="2"
          horizontalAlignment="left"
          text="最新" cssClass="personal-bangumi-data-name"></Label>
        <Label row="1" col="2"
          horizontalAlignment="center"
          text="14" cssClass="personal-bangumi-data-small"></Label>

        <Image row="0" rowSpan="2" col="3" src="~/img/bary.png"
          verticalAlignment="scretch"></Image>

        <Label row="0" col="4" 
          horizontalAlignment="left"
          text="下一集" cssClass="personal-bangumi-data-name"></Label>
        <Label row="1" col="4"
          horizontalAlignment="right"
          text="11.12(三)" cssClass="personal-bangumi-data-small"></Label>
      </GridLayout>
    </GridLayout>
  `,
  styles: [`
    .bangumi-item > * {
      color: #444;
    }
    .personal-bangumi-thumbnail {
      
    }
    .personal-bangumi-title {
      
    }
    .personal-bangumi-data-name {
      vertical-align: bottom;
      margin-bottom: 4;
      margin-left: 3;
      font-size: 12;
    }
    .personal-bangumi-data-large {
      vertical-align: bottom;
      font-size: 44;
      margin-bottom: 5;
    }
    .personal-bangumi-data-small {
      font-size: 22;
      vertical-align: bottom;
      margin-bottom: 12;
    }
  `],
  inputs: [
    'bangumi'
  ]
})
export class PersonalListBangumiComponent {

  constructor() {

  }
}