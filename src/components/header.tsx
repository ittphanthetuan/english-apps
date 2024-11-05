import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <div className='header p-4 flex'>
      <Menubar className='inline-block'>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href={'/'}>Home</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href={'/ipa'}>IPA</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ModeToggle />
    </div>
  )
}
