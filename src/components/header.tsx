import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Header() {
  return (
    <div className='header'>
      <Menubar className='inline-block'>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              IPA
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
    </div>
  )
}
