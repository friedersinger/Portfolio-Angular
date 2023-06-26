import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
}
