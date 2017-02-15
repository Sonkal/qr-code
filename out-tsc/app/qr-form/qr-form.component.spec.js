import { async, TestBed } from '@angular/core/testing';
import { QrFormComponent } from './qr-form.component';
describe('QrFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [QrFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QrFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=W:/Code/sonkal/qr-code/src/app/qr-form/qr-form.component.spec.js.map