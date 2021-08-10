import * as React from 'react'
import type { TLBounds } from '../../../types'

export class BrushUpdater {
  ref = React.createRef<SVGRectElement>()

  isControlled = false

  set(bounds?: TLBounds) {
    if (!this.isControlled) this.isControlled = true

    if (!bounds) {
      this.clear()
      return
    }

    const elm = this.ref?.current
    if (!elm) return

    elm.setAttribute('opacity', '1')
    elm.setAttribute('x', bounds.minX.toString())
    elm.setAttribute('y', bounds.minY.toString())
    elm.setAttribute('width', bounds.width.toString())
    elm.setAttribute('height', bounds.height.toString())
  }

  clear() {
    const elm = this.ref?.current
    if (!elm) return
    elm.setAttribute('opacity', '0')
    elm.setAttribute('width', '0')
    elm.setAttribute('height', '0')
  }
}
