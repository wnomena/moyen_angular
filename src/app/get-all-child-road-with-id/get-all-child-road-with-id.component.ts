import { AfterViewInit, Component, OnInit } from '@angular/core';
import { child_road_for_display, child_road_list, fetch_clild_road } from '../../simple_animation/animation';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-all-child-road-with-id',
  standalone: true,
  imports: [NgFor,InternalFooterComponent,NgIf,RouterLink,RouterLinkActive],
  templateUrl: './get-all-child-road-with-id.component.html',
  styleUrl: './get-all-child-road-with-id.component.css'
})
export class GetAllChildRoadWithIdComponent implements OnInit {
  parent_road_list: child_road_for_display[] = []
  constructor(private http:HttpService,private link : ActivatedRoute) {}
  ngOnInit(): void {
    let itermediare:child_road_for_display[] = []
    this.http.get_some_child_road(this.link.snapshot.paramMap.get("id")).subscribe((res)=> {
      for(let i = 0; i < res.data.length; i++) {
        itermediare.push({
          name: res.data[i].name, id: i, description: res.data[i].description, presentation_image: res.data[i].presentation_image, period: res.data[i].period, confort: res.data[i].confort, difficulty: res.data[i].difficulty, price: res.data[i].price, distance: res.data[i].distance,
          sejour_delay: res.data[i].sejour_delay,
          like_by_membes: res.data[i].like_by_membes
        })
      }
      this.parent_road_list = [...itermediare]
    })
  }
}
