import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy, OnChanges {

  urlParam: string | null = '';
  @Input() msg: string = '';

  constructor(private route: ActivatedRoute) {
    console.log("=== 1. constructeur ===");
  }

  ngOnInit(): void {
    console.log("=== 2. ngOnInit ===");
    //this.urlParam = this.route.snapshot.paramMap.get('arg');
    //console.log(this.urlParam);

    // ou avec observable
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.urlParam = params.arg;
    })

  }

  ngOnDestroy(): void {
    console.log("=== 3. ngOnDestroy ===");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("=== x. ngOnChanges ===");
    console.log(changes);
  }
}
