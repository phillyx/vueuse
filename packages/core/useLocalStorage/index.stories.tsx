import 'vue-tsx-support/enable-check'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { createComponent } from '../../api'
import { ShowDocs } from '../../_docs/showdocs'

const Demo = createComponent({
  render(this: Vue & {state: any; update: any}) {
    // @ts-ignore
    const Docs = <ShowDocs md={require('./index.md')} />

    return (
      <div>
        {Docs}
      </div>
    )
  },
})

storiesOf('State', module)
  .add('useLocalStorage', () => Demo as any)