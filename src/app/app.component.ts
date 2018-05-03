import { Component } from '@angular/core';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  myvar = true;
  cards: any[] = [
    {
      'name': 'Django Unchained',
      'img': 'https://www.bet.com/topics/d/django-unchained/_jcr_content/image.large2x1image.dimg/__1369349267451__1355512945737/121412-video-django-unchained-jamie-foxx-2.jpg'
    },
    {
      'name': 'Leonardo Dantés',
      'img': 'http://www.ideal.es/noticias/201510/22/media/cortadas/dantes--575x323.JPG'
    },
  ];
}
