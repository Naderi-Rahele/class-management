import { AsyncFactoryFn, BaseHarnessFilters, ComponentHarness, HarnessPredicate } from "@angular/cdk/testing";
import { MatFormFieldHarness } from "@angular/material/form-field/testing";
import { MatInputHarness } from "@angular/material/input/testing";

interface FormInputHarnessFilters extends BaseHarnessFilters {
    label?: string;
}

export class FormInputHarness extends ComponentHarness {
    static hostSelector = 'app-form-input';
    static with(options: FormInputHarnessFilters): HarnessPredicate<FormInputHarness> {
        return new HarnessPredicate(FormInputHarness, options)
            .addOption('label', options.label, (harness, text) => HarnessPredicate.stringMatches(harness.getLabel(), text));
    }

    protected getInput: AsyncFactoryFn<MatInputHarness> = this.locatorFor(MatInputHarness);
    protected getFormField: AsyncFactoryFn<MatFormFieldHarness> = this.locatorFor(MatFormFieldHarness);

    async setValue(value: string) {
        const input = await this.getInput();
        await input.setValue(value);
    }

    async getLabel(): Promise<string> {
        const formField = await this.getFormField();
        return (await formField.getLabel()) ?? '';
    }
}

