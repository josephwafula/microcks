/*
 * Licensed to Laurent Broudoux (the "Author") under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. Author licenses this
 * file to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';

import { Metadata } from '../../../app/models/service.model';

@Component({
  selector: 'label-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelListComponent implements OnInit {

  @Input('metadata') metadadata: Metadata

  @Input('filter') filter: string

  private labels: any = null;

  ngOnInit() {
    if (this.metadadata) {
      if (this.filter) {
        this.labels = {};
        var filteredLabels = this.filter.split(',');
        filteredLabels.forEach(label => {
          if (this.metadadata.labels[label]) {
            this.labels[label] = this.metadadata.labels[label];
          }
        });
      } else {
        this.labels = this.metadadata.labels;
      }
    }
  }

  getLabelsKeys(): string[] {
    if (this.labels == null) {
      return null;
    }
    return Object.keys(this.labels);
  }
  getLabelValue(label: string): string {
    if (this.labels == null) {
      return null;
    }
    return this.labels[label];
  }
}