import { Button } from './ui/button';

export const ListIPA = (props: any) => {
  const { list, data, currentItem, changeIndex } = props;
  return (
    <div className='flex gap-1 list-ipa'>
      {list.map((item: any) => {
        const isEqual = item.label === currentItem.label;
        return (
          <Button
            key={item.label}
            onClick={() => changeIndex(data.findIndex((i: any) => i.label === item.label))}
            variant="outline"
            className={`item-ipa ${isEqual ? 'text-red-600': ''}`}
          >
            {item.label}
          </Button>
        )
      })}
    </div>
  )
}
