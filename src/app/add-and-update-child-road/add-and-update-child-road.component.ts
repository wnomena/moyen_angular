import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { child_road_list, fetch_clild_road, fetch_clild_road_2, inversed_month } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-and-update-child-road',
  standalone: true,
  imports: [InternalFooterComponent,NgIf],
  templateUrl: './add-and-update-child-road.component.html',
  styleUrl: './add-and-update-child-road.component.css'
})
export class AddAndUpdateChildRoadComponent implements OnInit ,OnDestroy{
  title:String = "Ajout de circuit enfant"
  value_to_show:child_road_list | undefined;
  private subscription : Subscription | undefined
  form_data = new FormData()
  constructor(private link : ActivatedRoute,private http : HttpClient,private router : Router) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    if(this.link.snapshot.paramMap.get("name") == "0") {
    }else {
      this.title = "Modification d'une route enfant"
      this.subscription = this.http.get<fetch_clild_road_2>(`http://localhost:5000/public_get/one_road/${this.link.snapshot.paramMap.get("name")}`).subscribe(result=>{
        this.value_to_show = result.data
        //impossible de convertir certaines valuers selon angular, a revoir demain.

      })
    }
  }
  retour() {
    this.router.navigate(["admin/home/list-of-parent"])
  }
  update_all_value(name : string,distance : string,confort : string,period_d : string,period_e : string,jours : string, nuit : string,difficuclty : string, price : string, image : HTMLInputElement) {
    for(let i of [name,distance,confort,period_d,period_e,jours,nuit,difficuclty,price,image.files]) {
      if(i == "" || i == undefined || i == null) {
        location.reload()
      } else {
        this.form_data.append("image",image.files ? image.files[0] : "")
        let body = {
          name : name,
          distance : distance,
          confort : confort,
          period : `${period_d} ${period_e}`,
          sejours_delay : `${jours} ${nuit}`,
          difficuclty : difficuclty,
          price : price
        }
        this.form_data.append("body",JSON.stringify(body))
        this.subscription = this.http.put<{message : string}>(`http://localhost:5000/utilisateurs/update_child_way/by_user`,this.form_data).subscribe({next : a => {
          this.router.navigate(["admin/home/list-of-parent"])
        },error : err => location.reload()})
      }
    }
  }
}
//update road