import{b as o,i as l,f as p,Z as a,c,j as F,X as C,F as P}from"./chunk-BKDDFIKN-DHl5omum.js";import{m as u,o as v,T as L,C as w}from"./mermaid.esm.min-C_0TmTCz.js";var M="\0",_="\0",D="",m,j=(m=class{constructor(t={}){this._isDirected=o(t,"directed")?t.directed:!0,this._isMultigraph=o(t,"multigraph")?t.multigraph:!1,this._isCompound=o(t,"compound")?t.compound:!1,this._label=void 0,this._defaultNodeLabelFn=v(void 0),this._defaultEdgeLabelFn=v(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[_]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(t){return this._label=t,this}graph(){return this._label}setDefaultNodeLabel(t){return L(t)||(t=v(t)),this._defaultNodeLabelFn=t,this}nodeCount(){return this._nodeCount}nodes(){return l(this._nodes)}sources(){var t=this;return p(this.nodes(),function(e){return w(t._in[e])})}sinks(){var t=this;return p(this.nodes(),function(e){return w(t._out[e])})}setNodes(t,e){var s=arguments,i=this;return a(t,function(r){s.length>1?i.setNode(r,e):i.setNode(r)}),this}setNode(t,e){return o(this._nodes,t)?(arguments.length>1&&(this._nodes[t]=e),this):(this._nodes[t]=arguments.length>1?e:this._defaultNodeLabelFn(t),this._isCompound&&(this._parent[t]=_,this._children[t]={},this._children[_][t]=!0),this._in[t]={},this._preds[t]={},this._out[t]={},this._sucs[t]={},++this._nodeCount,this)}node(t){return this._nodes[t]}hasNode(t){return o(this._nodes,t)}removeNode(t){var e=this;if(o(this._nodes,t)){var s=u(function(i){e.removeEdge(e._edgeObjs[i])},"removeEdge");delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),delete this._parent[t],a(this.children(t),function(i){e.setParent(i)}),delete this._children[t]),a(l(this._in[t]),s),delete this._in[t],delete this._preds[t],a(l(this._out[t]),s),delete this._out[t],delete this._sucs[t],--this._nodeCount}return this}setParent(t,e){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(c(e))e=_;else{e+="";for(var s=e;!c(s);s=this.parent(s))if(s===t)throw new Error("Setting "+e+" as parent of "+t+" would create a cycle");this.setNode(e)}return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=e,this._children[e][t]=!0,this}_removeFromParentsChildList(t){delete this._children[this._parent[t]][t]}parent(t){if(this._isCompound){var e=this._parent[t];if(e!==_)return e}}children(t){if(c(t)&&(t=_),this._isCompound){var e=this._children[t];if(e)return l(e)}else{if(t===_)return this.nodes();if(this.hasNode(t))return[]}}predecessors(t){var e=this._preds[t];if(e)return l(e)}successors(t){var e=this._sucs[t];if(e)return l(e)}neighbors(t){var e=this.predecessors(t);if(e)return F(e,this.successors(t))}isLeaf(t){var e;return this.isDirected()?e=this.successors(t):e=this.neighbors(t),e.length===0}filterNodes(t){var e=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});e.setGraph(this.graph());var s=this;a(this._nodes,function(n,h){t(h)&&e.setNode(h,n)}),a(this._edgeObjs,function(n){e.hasNode(n.v)&&e.hasNode(n.w)&&e.setEdge(n,s.edge(n))});var i={};function r(n){var h=s.parent(n);return h===void 0||e.hasNode(h)?(i[n]=h,h):h in i?i[h]:r(h)}return u(r,"findParent"),this._isCompound&&a(e.nodes(),function(n){e.setParent(n,r(n))}),e}setDefaultEdgeLabel(t){return L(t)||(t=v(t)),this._defaultEdgeLabelFn=t,this}edgeCount(){return this._edgeCount}edges(){return C(this._edgeObjs)}setPath(t,e){var s=this,i=arguments;return P(t,function(r,n){return i.length>1?s.setEdge(r,n,e):s.setEdge(r,n),n}),this}setEdge(){var t,e,s,i,r=!1,n=arguments[0];typeof n=="object"&&n!==null&&"v"in n?(t=n.v,e=n.w,s=n.name,arguments.length===2&&(i=arguments[1],r=!0)):(t=n,e=arguments[1],s=arguments[3],arguments.length>2&&(i=arguments[2],r=!0)),t=""+t,e=""+e,c(s)||(s=""+s);var h=f(this._isDirected,t,e,s);if(o(this._edgeLabels,h))return r&&(this._edgeLabels[h]=i),this;if(!c(s)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(e),this._edgeLabels[h]=r?i:this._defaultEdgeLabelFn(t,e,s);var g=O(this._isDirected,t,e,s);return t=g.v,e=g.w,Object.freeze(g),this._edgeObjs[h]=g,E(this._preds[e],t),E(this._sucs[t],e),this._in[e][h]=g,this._out[t][h]=g,this._edgeCount++,this}edge(t,e,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):f(this._isDirected,t,e,s);return this._edgeLabels[i]}hasEdge(t,e,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):f(this._isDirected,t,e,s);return o(this._edgeLabels,i)}removeEdge(t,e,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):f(this._isDirected,t,e,s),r=this._edgeObjs[i];return r&&(t=r.v,e=r.w,delete this._edgeLabels[i],delete this._edgeObjs[i],N(this._preds[e],t),N(this._sucs[t],e),delete this._in[e][i],delete this._out[t][i],this._edgeCount--),this}inEdges(t,e){var s=this._in[t];if(s){var i=C(s);return e?p(i,function(r){return r.v===e}):i}}outEdges(t,e){var s=this._out[t];if(s){var i=C(s);return e?p(i,function(r){return r.w===e}):i}}nodeEdges(t,e){var s=this.inEdges(t,e);if(s)return s.concat(this.outEdges(t,e))}},u(m,"Graph"),m);j.prototype._nodeCount=0;j.prototype._edgeCount=0;function E(d,t){d[t]?d[t]++:d[t]=1}u(E,"incrementOrInitEntry");function N(d,t){--d[t]||delete d[t]}u(N,"decrementOrRemoveEntry");function f(d,t,e,s){var i=""+t,r=""+e;if(!d&&i>r){var n=i;i=r,r=n}return i+D+r+D+(c(s)?M:s)}u(f,"edgeArgsToId");function O(d,t,e,s){var i=""+t,r=""+e;if(!d&&i>r){var n=i;i=r,r=n}var h={v:i,w:r};return s&&(h.name=s),h}u(O,"edgeArgsToObj");function b(d,t){return f(d,t.v,t.w,t.name)}u(b,"edgeObjToId");export{j as b};
