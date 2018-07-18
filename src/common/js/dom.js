export function hasDom (childnode, parentnode) {
  let cn = childnode.cloneNode(true)
  let pn = parentnode.cloneNode(true)
  let ctmpNode = document.createElement('div')
  let ptmpnode = document.createElement('div')
  ctmpNode.appendChild(cn)
  ptmpnode.appendChild(pn)
  let childstr = ctmpNode.innerHTML
  let parentstr = ptmpnode.innerHTML
  ctmpNode = ptmpnode = null
  if (parentstr.indexOf(childstr) === -1) return false
  else return true
}
