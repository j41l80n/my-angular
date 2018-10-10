import { Component } from '@angular/core';

// custon
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ic_sprint: any[];
  constructor(db: AngularFireDatabase) {
    db.list('/bolsistas').valueChanges()
      .subscribe(ic_sprint=>{
        this.ic_sprint = ic_sprint;
        console.log(ic_sprint);
    });
  }

  title = 'Laboratórios SPRINT';
}
