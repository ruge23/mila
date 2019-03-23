import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { PopoverComponent } from './popover/popover';
@NgModule({
	declarations: [ExpandableComponent,
    PopoverComponent],
	imports: [],
	exports: [ExpandableComponent,
    PopoverComponent]
})
export class ComponentsModule {}
