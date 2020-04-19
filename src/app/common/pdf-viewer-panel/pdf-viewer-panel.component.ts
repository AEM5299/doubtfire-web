import { Component, OnInit, Input, Inject } from '@angular/core';
import { analyticsService } from 'src/app/ajs-upgraded-providers';

@Component({
  selector: 'pdf-viewer-panel',
  templateUrl: './pdf-viewer-panel.component.html',
  styleUrls: ['./pdf-viewer-panel.component.scss']
})
export class PdfViewerPanelComponent implements OnInit {
  @Input() pdfUrl: string;
  @Input() footerText: string;
  @Input() resourcesUrl: string;
  @Input() hideFooter: boolean;
  constructor(
    @Inject(analyticsService) private analyticsService: any,
  ) { }

  ngOnInit(): void {
    console.log(this.pdfUrl);
  }

  downloadEvent(type: string) {
    this.analyticsService.event('Task Sheet', `Downloaded ${type}`);
  }

  // #$scope.$watch 'pdfUrl', (newUrl) ->
  //   #       $scope.showViewer = newUrl?
}
