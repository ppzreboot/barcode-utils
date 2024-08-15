import { Enctype, enctype_list } from '../../../../common/enctype'
import { useState2_input } from '../../../../common/state'
import { Enctype_select } from '../../../cmp/enctype'
import { Field } from '../../../cmp/form/field'
import { Output } from './output'

export
function Encode() {
  const className = 'column is-half-tablet is-one-third-desktop is-one-quarter-fullhd'

  const states = {
    basic: {
      enctype: useState2_input<Enctype>(enctype_list[0]),
      content: useState2_input<string>(''),
    },
    appearence: {
      scale: useState2_input<number>(1),
      margin: useState2_input<number>(0),
      height: useState2_input<number>(30),
      bar_color: useState2_input<string>('#000000'),
      bg_color: useState2_input<string>('#ffffff'),
    },
  }

  return <div className='container'>
    <div className='block'>
      <h3 className='title is-5'>Basic</h3>

      <div className='columns is-multiline'>
        <Field className={className} label='Encode Type'>
          <div className='control'>
            <Enctype_select state={states.basic.enctype.value} />
          </div>
        </Field>
      </div>
      <div className='columns'>
        <Field
          className='column is-two-thirds-desktop is-half-fullhd'
          label='Content'
          error={states.basic.content.error.val}
        >
          <div className='control'>
            <textarea
              className='textarea'
              value={states.basic.content.value.val}
              onChange={evt => states.basic.content.value.set(evt.target.value)}
            />
          </div>
        </Field>
      </div>
    </div>

    <div className='block'>
      <h3 className='title is-5'>Appearence</h3>

      <div className='columns is-multiline'>
        <Field className={className} label='Scale'>
          <div className='control'>
            <input
              className='input'
              type='number'
              value={states.appearence.scale.value.val}
              onChange={evt => states.appearence.scale.value.set(Number(evt.target.value))}
            />
          </div>
        </Field>
        <Field className={className} label='Margin'>
          <div className='control'>
            <input
              className='input'
              type='number'
              value={states.appearence.margin.value.val}
              onChange={evt => states.appearence.margin.value.set(Number(evt.target.value))}
            />
          </div>
        </Field>
        <Field className={className} label='Height'>
          <div className='control'>
            <input
              className='input'
              type='number'
              value={states.appearence.height.value.val}
              onChange={evt => states.appearence.height.value.set(Number(evt.target.value))}
            />
          </div>
        </Field>

        <div className={className}>
          <div className='columns is-mobile'>
            <Field className='column is-half-mobile' label='Bar Color'>
              <div className='control'>
                <input
                  className='input'
                  type='color'
                  value={states.appearence.bar_color.value.val}
                  onChange={evt => states.appearence.bar_color.value.set(evt.target.value)}
                />
              </div>
            </Field>
            <Field className='column is-half-mobile' label='Background'>
              <div className='control'>
                <input
                  className='input'
                  type='color'
                  value={states.appearence.bg_color.value.val}
                  onChange={evt => states.appearence.bg_color.value.set(evt.target.value)}
                />
              </div>
            </Field>
          </div>
        </div>
      </div>
    </div>

    <Output />

  </div>
}
