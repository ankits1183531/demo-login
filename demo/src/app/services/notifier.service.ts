import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class CustomNotifierService {
  constructor(
    public toastr: ToastsManager) {}

  notifier = ((type, message) => {
    if (type == "success") {
      this.toastr.success('success', message);
    } else if (type == "error") {
      this.toastr.error('error', message);
    } else if (type == "info") {
      this.toastr.info('info', message);
    } else {
      this.toastr.error('warning', message);
    }
  });


}