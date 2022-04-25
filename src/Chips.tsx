import { Chips, Icon } from 'spoton-lib'

export const ChipsTest = () => {
    return (
        <div>
            <Chips
                text={'Some text'}
                truncateText={false}
                key={'key'}
                suffixIcon={
                    <Icon
                        size={18}
                        name={'iconName'}
                        alt={`iconAlt`}
                    />
                }
                isSelected={true}
                onClick={() => console.log('onClick')}
                isDisabled={false}
            />
        </div>
    )
}