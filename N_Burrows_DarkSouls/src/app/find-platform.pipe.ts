import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'findPlatform'
})
export class FindPlatformPipe implements PipeTransform {

  transform(contentList: Content[], platform?: String): Content[] {
    return contentList.filter(c => {
      return platform ? c.type === platform : (!c.type || c.type === '');
    });
  }

}
