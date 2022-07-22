import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TextPipe } from '../../pipes/text.pipe';
import { StarsPipe } from '../../pipes/stars.pipe';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient : HttpClient,
    private textPipe : TextPipe,
    private starsPipe: StarsPipe
  ) { }

  public text: string = "";

  ngOnInit(): void {
    this.httpClient.get<any>('https://api.publicapis.org/entries').subscribe(response => {
      for (var entry of response['entries']) {
        this.text += ' ' + entry["Description"];
      }

    this.text = this.starsPipe.transform(this.text)
    });
  }

  public routeToPath(path: string){
    console.log(path);
    this.router.navigateByUrl(path);
  }

}
