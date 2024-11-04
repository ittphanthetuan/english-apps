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
              <Link href={'/ipa'}>IPA 1</Link>
            </MenubarItem>
            {/* <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem> */}
          </MenubarContent>
        </MenubarMenu>
        {/* <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> */}
      </Menubar>
      <ModeToggle />
    </div>
  )
}
