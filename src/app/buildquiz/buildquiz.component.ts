import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildquiz',
  templateUrl: './buildquiz.component.html',
  styleUrls: ['./buildquiz.component.css']
})
export class BuildquizComponent implements OnInit {

  private map = new Map<string, string[]>([
    ['Programming Languages',['Java','C++','Python']],
    ['Operating Systems',['Linux','Windows 10','Ubuntu']],
    ['Databases',['SQL','IBM DB2','DB Management']]
  ]);
  
  category:string;
  subCategory:string;

  // isSubSelected(){
  //   if(this.subject="Choose..." )
  //     return true;
  //   else
  //     return false;

  // }

  get categories():string[]{
    return Array.from(this.map.keys());
  }

  get subCategories():string[] {
    return this.map.get(this.category);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
