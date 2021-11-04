import { defineComponent } from 'vue'
import SEllipsis from '../../src/ellipsis'


export default defineComponent({
    name: 'icon',
    render() {
        return (
            <div class="block">
                <span class="h2">基础用法</span>
                <div class="block-flex">
                    <SEllipsis style="max-width:240px;" v-slots={{
                        default: () => (
                            <>123</>
                        ),
                        tooltip: () => (
                            <>这是tooltip插槽</>
                        )
                    }}></SEllipsis>
                </div>
            </div>
        )
    }
})