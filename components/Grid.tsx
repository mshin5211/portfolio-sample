import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className="w-full py-20">
            {gridItems.map(({ id, title, description, className, img, titleClassName,
                imgClassName, spareImg 
            }) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img = {img}
                    spareImg = {spareImg}
                    imgClassName = {imgClassName}
                    titleClassName = {titleClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid