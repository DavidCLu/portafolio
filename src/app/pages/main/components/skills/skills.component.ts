import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  public spherewidth:number=300;
  constructor() { }
  
  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.skillSphere()
    

  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    document.querySelector('.tagcloud')!.innerHTML = ''; // limpiar
    this.skillSphere(); // volver a crear
  }
  


  
  skillSphere(){
        /**skilss */
        const TagCloud = require('TagCloud');
        const container = '.tagcloud';
        const texts = [
          'JAVA 17','SPRING BOOT','SPRING SECURITY','SPRING CLOUD','SPRING DATA','HIBERNATE','JPA','MAVEN',
          'AWS','SQS','STEP FUNCTIONS','S3','DYNAMODB','LAMBDA',
          'MONGODB','MYSQL','POSTGRESQL','SQL',
          'REST API','MICROSERVICES','KAFKA','JUNIT','MOCKITO',
          'ANGULAR','TYPESCRIPT','DOCKER','KUBERNETES',
          'GIT','GITHUB','SOURCETREE','JENKINS','JIRA','CONFLUENCE',
          'POSTMAN','SWAGGER','STS4','VS CODE','SONARQUBE','LINUX'
        ];

        let radius = 250;
        if (this.getScreenWidth < 645) {
          radius = this.getScreenWidth / 3; // ajusta proporcional
        }



        const options = {
          radius: radius,
          maxSpeed: 'medium',//medium
          initSpeed: 'normal',//normal
          direction: 135,
          keep: 135,
        };
        
         TagCloud(container, texts, options);
       
        delete TagCloud[""];
        
  }

}
