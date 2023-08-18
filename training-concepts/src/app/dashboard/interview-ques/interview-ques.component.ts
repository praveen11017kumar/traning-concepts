import { Component } from '@angular/core';
import { ICourseInfo } from './models/common.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-ques',
  templateUrl: './interview-ques.component.html',
  styleUrls: ['./interview-ques.component.scss']
})
export class InterviewQuesComponent {
  
  coursesInfo: ICourseInfo[] = [
    {
      id: '1',
      title: 'Angular',
      description: 'Angular is a component-based framework.A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.',
      courseImage: '../../../../assets/images/ang.png',
      link:'https://github.com/sudheerj/angular-interview-questions',
      cheatSheetLink: 'https://hackr.io/blog/angular-cheat-sheet',
    },
    {
      id: '2',
      title: 'Javascript',
      description: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages.',
      courseImage: '../../../../assets/images/java-script.jpg',
      link:'https://github.com/sudheerj/javascript-interview-questions',
      cheatSheetLink: 'https://quickref.me/javascript.html'
    },
    {
      id: '3',
      title: 'HTML',
      description: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content and assisted by technologies such as CSS and scripting languages such as JS.',
      courseImage: '../../../../assets/images/html-img.png',
      link:'https://www.interviewbit.com/html-interview-questions/',
      cheatSheetLink: 'http://www.simplehtmlguide.com/cheatsheet.php'
    },
    {
      id: '4',
      title: 'CSS',
      description: 'ACSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.',
      courseImage: '../../../../assets/images/css.jpg',
      link:'https://www.shiksha.com/online-courses/articles/css-interview-questions-and-answers/',
      cheatSheetLink: 'https://websitesetup.org/css3-cheat-sheet/'
    },
    {
      id: '5',
      title: 'Bootstrap',
      description: 'Bootstrap is a free, one of the most popular front-end frameworks and open-source collection of CSS and JavaScript/jQuery code used for creating dynamic websites layout and web applications',
      courseImage: '../../../../assets/images/bootstrap.jpg',
      link:'https://www.interviewbit.com/bootstrap-interview-questions/',
      cheatSheetLink: 'https://hackerthemes.com/bootstrap-cheatsheet/#form-control-lg'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((res)=>{
      if(res['id']){
        this.coursesInfo = this.coursesInfo.filter(rec => rec.id === res['id'])
      }
    })
  }
}
