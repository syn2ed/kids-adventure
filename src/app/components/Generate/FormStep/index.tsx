import { useFormStep } from "../../../hooks/use-form-step"

import { YourCharacters } from "./YourCharacters"
import { Age } from "./Age"
import { Checkout } from "./Checkout"
import { Summary } from "./Summary"

const steps = [
  {
    step: 1,
    component: YourCharacters
  },
  {
    step: 2,
    component: Age
  },
  {
    step: 3,
    component: Checkout
  },
  {
    step: 4,
    component: Summary
  }
]

export function FormStep() {
  const { currentStep } = useFormStep()

  const step = steps.find(({ step }) => step === currentStep)

  return (
    <div className="flex flex-col flex-1 justify-between">
      {step && step.component()}
    </div>
  )
} 