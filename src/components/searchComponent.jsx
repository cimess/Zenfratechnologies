import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
             <button type="button" className="outline-none flex items-center">
              All Courses...<ChevronDownIcon className="size-4"/>
             </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
              <DropdownMenuItem>FrontEnd-Development</DropdownMenuItem>
              <DropdownMenuItem>Mobile-Development</DropdownMenuItem>
              <DropdownMenuItem>Backend-Development</DropdownMenuItem>
               <DropdownMenuItem>Software-Development exential </DropdownMenuItem>
                <DropdownMenuItem>MachineLearning & Ai</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
