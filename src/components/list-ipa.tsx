import { Button } from './ui/button';

export const ListIPA = (props: any) => {
  const { list, data, currentItem, changeIndex } = props;
  return (
    <div className='list-ipa'>
      {list.map((item: any) => {
        const isEqual = item.label === currentItem.label;
        return (
          <Button
            key={item.label}
            onClick={() => changeIndex(data.findIndex((i: any) => i.label === item.label))}
            className={`item-ipa ${isEqual ? 'active': ''}`}
          >
            {item.label}
          </Button>
        )
      })}
    </div>
  )
}
