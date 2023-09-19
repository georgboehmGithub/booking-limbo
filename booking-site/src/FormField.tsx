import classNames from "classnames";
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

type FormFieldProps = {
    informationType: string,
    required: boolean,
    children?: React.ReactNode; // Specify that children should be of type React.ReactNode
}

const tooltipContents = {
    "Name": "Does not have to be your full name.",
    "Date": "When should I play?",
    "Time": "At what time should I play?",
    "Phone number": "You can also leave this blank and provide me with other contact information in your message.",
    "Message": "Anything that seems additionally relevant to you."
}

const FormField: React.FC<FormFieldProps> = ({informationType, required, children}) => {
    return (
        <div className="border rounded-lg border-gray-300 w-[700px] h-36 p-4 bg-white">
            <div className="flex flex-row">
            <p className="font-medium">{informationType}</p>
            {required && (
                <>
                <FontAwesomeIcon icon={faAsterisk} size="xs" color="red" className="ml-1" data-tooltip-id={`my-tooltip-${informationType}`} data-tooltip-content={tooltipContents[informationType as keyof typeof tooltipContents]}/>
                <Tooltip id={`my-tooltip-${informationType}`} place="top" />
                </>
            )}
            {!required && (
                <>
                <FontAwesomeIcon icon={faInfoCircle} size="xs" color="blue" className="ml-1" data-tooltip-id={`my-tooltip-${informationType}`} data-tooltip-content={tooltipContents[informationType as keyof typeof tooltipContents]}/>
                <Tooltip id={`my-tooltip-${informationType}`} place="top" />
                </>
            )}
            </div>
            <div className={classNames("py-2", {"w-1/2": informationType !== "Message", "w-full": informationType === "Message"})}>{children}</div>
        </div>
    )
}

export default FormField