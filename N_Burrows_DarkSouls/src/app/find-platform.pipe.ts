import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'findPlatform'
})
export class FindPlatformPipe implements PipeTransform {

  transform(contentList: Content[], platform?: String) {
    return contentList.filter(c => c.type == platform);
  }

}
