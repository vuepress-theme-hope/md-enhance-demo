import{l as X}from"./chunk-4BPNZXC3-Dp8yzOeo.js";import{m as y,J as a,bn as R,bo as T,bp as L,bq as $,b5 as F,br as I,bs as M,bt as Y,bu as j,bv as Q,bw as H,bx as q,by as z,Q as K}from"./mermaid.esm.min-C_0TmTCz.js";import{s as U}from"./chunk-BOP2KBYH-Bo-I-sQm.js";import{b as O}from"./chunk-6XGRHI2A-BaEk-Bar.js";import"./chunk-BKDDFIKN-DHl5omum.js";import"./app-Du6P1JmT.js";var c=new Map,E=new Map,k=new Map,V=y(()=>{E.clear(),k.clear(),c.clear()},"clear"),S=y((e,t)=>{let r=E.get(t)||[];return a.trace("In isDescendant",t," ",e," = ",r.includes(e)),r.includes(e)},"isDescendant"),W=y((e,t)=>{let r=E.get(t)||[];return a.info("Descendants of ",t," is ",r),a.info("Edge is ",e),e.v===t||e.w===t?!1:r?r.includes(e.v)||S(e.v,t)||S(e.w,t)||r.includes(e.w):(a.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),G=y((e,t,r,o)=>{a.warn("Copying children of ",e,"root",o,"data",t.node(e),o);let g=t.children(e)||[];e!==o&&g.push(e),a.warn("Copying (nodes) clusterId",e,"nodes",g),g.forEach(s=>{if(t.children(s).length>0)G(s,t,r,o);else{let i=t.node(s);a.info("cp ",s," to ",o," with parent ",e),r.setNode(s,i),o!==t.parent(s)&&(a.warn("Setting parent",s,t.parent(s)),r.setParent(s,t.parent(s))),e!==o&&s!==e?(a.debug("Setting parent",s,e),r.setParent(s,e)):(a.info("In copy ",e,"root",o,"data",t.node(e),o),a.debug("Not Setting parent for node=",s,"cluster!==rootId",e!==o,"node!==clusterId",s!==e));let d=t.edges(s);a.debug("Copying Edges",d),d.forEach(h=>{a.info("Edge",h);let b=t.edge(h.v,h.w,h.name);a.info("Edge data",b,o);try{W(h,o)?(a.info("Copying as ",h.v,h.w,b,h.name),r.setEdge(h.v,h.w,b,h.name),a.info("newGraph edges ",r.edges(),r.edge(r.edges()[0]))):a.info("Skipping copy of edge ",h.v,"-->",h.w," rootId: ",o," clusterId:",e)}catch(N){a.error(N)}})}a.debug("Removing node",s),t.removeNode(s)})},"copy"),J=y((e,t)=>{let r=t.children(e),o=[...r];for(let g of r)k.set(g,e),o=[...o,...J(g,t)];return o},"extractDescendants"),Z=y((e,t,r)=>{let o=e.edges().filter(d=>d.v===t||d.w===t),g=e.edges().filter(d=>d.v===r||d.w===r),s=o.map(d=>({v:d.v===t?r:d.v,w:d.w===t?t:d.w})),i=g.map(d=>({v:d.v,w:d.w}));return s.filter(d=>i.some(h=>d.v===h.v&&d.w===h.w))},"findCommonEdges"),x=y((e,t,r)=>{let o=t.children(e);if(a.trace("Searching children of id ",e,o),o.length<1)return e;let g;for(let s of o){let i=x(s,t,r),d=Z(t,r,i);if(i)if(d.length>0)g=i;else return i}return g},"findNonClusterChild"),D=y(e=>!c.has(e)||!c.get(e).externalConnections?e:c.has(e)?c.get(e).id:e,"getAnchorId"),_=y((e,t)=>{if(!e||t>10){a.debug("Opting out, no graph ");return}else a.debug("Opting in, graph ");e.nodes().forEach(function(r){e.children(r).length>0&&(a.warn("Cluster identified",r," Replacement id in edges: ",x(r,e,r)),E.set(r,J(r,e)),c.set(r,{id:x(r,e,r),clusterData:e.node(r)}))}),e.nodes().forEach(function(r){let o=e.children(r),g=e.edges();o.length>0?(a.debug("Cluster identified",r,E),g.forEach(s=>{let i=S(s.v,r),d=S(s.w,r);i^d&&(a.warn("Edge: ",s," leaves cluster ",r),a.warn("Descendants of XXX ",r,": ",E.get(r)),c.get(r).externalConnections=!0)})):a.debug("Not a cluster ",r,E)});for(let r of c.keys()){let o=c.get(r).id,g=e.parent(o);g!==r&&c.has(g)&&!c.get(g).externalConnections&&(c.get(r).id=g)}e.edges().forEach(function(r){let o=e.edge(r);a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(r)),a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(e.edge(r)));let g=r.v,s=r.w;if(a.warn("Fix XXX",c,"ids:",r.v,r.w,"Translating: ",c.get(r.v)," --- ",c.get(r.w)),c.get(r.v)||c.get(r.w)){if(a.warn("Fixing and trying - removing XXX",r.v,r.w,r.name),g=D(r.v),s=D(r.w),e.removeEdge(r.v,r.w,r.name),g!==r.v){let i=e.parent(g);c.get(i).externalConnections=!0,o.fromCluster=r.v}if(s!==r.w){let i=e.parent(s);c.get(i).externalConnections=!0,o.toCluster=r.w}a.warn("Fix Replacing with XXX",g,s,r.name),e.setEdge(g,s,o,r.name)}}),a.warn("Adjusted Graph",X(e)),P(e,0),a.trace(c)},"adjustClustersAndEdges"),P=y((e,t)=>{var g,s;if(a.warn("extractor - ",t,X(e),e.children("D")),t>10){a.error("Bailing out");return}let r=e.nodes(),o=!1;for(let i of r){let d=e.children(i);o=o||d.length>0}if(!o){a.debug("Done, no node has children",e.nodes());return}a.debug("Nodes = ",r,t);for(let i of r)if(a.debug("Extracting node",i,c,c.has(i)&&!c.get(i).externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),!c.has(i))a.debug("Not a cluster",i,t);else if(!c.get(i).externalConnections&&e.children(i)&&e.children(i).length>0){a.warn("Cluster without external connections, without a parent and with children",i,t);let d=e.graph().rankdir==="TB"?"LR":"TB";(s=(g=c.get(i))==null?void 0:g.clusterData)!=null&&s.dir&&(d=c.get(i).clusterData.dir,a.warn("Fixing dir",c.get(i).clusterData.dir,d));let h=new O({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.warn("Old graph before copy",X(e)),G(i,e,h,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:c.get(i).clusterData,label:c.get(i).label,graph:h}),a.warn("New graph after copy node: (",i,")",X(h)),a.debug("Old graph after copy",X(e))}else a.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!c.get(i).externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),a.debug(c);r=e.nodes(),a.warn("New list of nodes",r);for(let i of r){let d=e.node(i);a.warn(" Now next level",i,d),d!=null&&d.clusterNode&&P(d.graph,t+1)}},"extractor"),B=y((e,t)=>{if(t.length===0)return[];let r=Object.assign([],t);return t.forEach(o=>{let g=e.children(o),s=B(e,g);r=[...r,...s]}),r},"sorter"),ee=y(e=>B(e,e.children()),"sortNodesByHierarchy"),A=y(async(e,t,r,o,g,s)=>{a.warn("Graph in recursive render:XAX",X(t),g);let i=t.graph().rankdir;a.trace("Dir in recursive render - dir:",i);let d=e.insert("g").attr("class","root");t.nodes()?a.info("Recursive render XXX",t.nodes()):a.info("No nodes found for",t),t.edges().length>0&&a.info("Recursive edges",t.edge(t.edges()[0]));let h=d.insert("g").attr("class","clusters"),b=d.insert("g").attr("class","edgePaths"),N=d.insert("g").attr("class","edgeLabels"),p=d.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(l){let n=t.node(l);if(g!==void 0){let u=JSON.parse(JSON.stringify(g.clusterData));a.trace(`Setting data for parent cluster XXX
 Node.id = `,l,`
 data=`,u.height,`
Parent cluster`,g.height),t.setNode(g.id,u),t.parent(l)||(a.trace("Setting parent",l,g.id),t.setParent(l,g.id,u))}if(a.info("(Insert) Node XXX"+l+": "+JSON.stringify(t.node(l))),n==null?void 0:n.clusterNode){a.info("Cluster identified XBX",l,n.width,t.node(l));let{ranksep:u,nodesep:w}=t.graph();n.graph.setGraph({...n.graph.graph(),ranksep:u+25,nodesep:w});let m=await A(p,n.graph,r,o,t.node(l),s),C=m.elem;R(n,C),n.diff=m.diff||0,a.info("New compound node after recursive render XAX",l,"width",n.width,"height",n.height),T(C,n)}else t.children(l).length>0?(a.trace("Cluster - the non recursive path XBX",l,n.id,n,n.width,"Graph:",t),a.trace(x(n.id,t)),c.set(n.id,{id:x(n.id,t),node:n})):(a.trace("Node - the non recursive path XAX",l,p,t.node(l),i),await L(p,t.node(l),{config:s,dir:i}))})),await y(async()=>{let l=t.edges().map(async function(n){let u=t.edge(n.v,n.w,n.name);a.info("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),a.info("Edge "+n.v+" -> "+n.w+": ",n," ",JSON.stringify(t.edge(n))),a.info("Fix",c,"ids:",n.v,n.w,"Translating: ",c.get(n.v),c.get(n.w)),await $(N,u)});await Promise.all(l)},"processEdges")(),a.info("Graph before layout:",JSON.stringify(X(t))),a.info("############################################# XXX"),a.info("###                Layout                 ### XXX"),a.info("############################################# XXX"),U(t),a.info("Graph after layout:",JSON.stringify(X(t)));let f=0,{subGraphTitleTotalMargin:v}=F(s);return await Promise.all(ee(t).map(async function(l){var u;let n=t.node(l);if(a.info("Position XBX => "+l+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n==null?void 0:n.clusterNode)n.y+=v,a.info("A tainted cluster node XBX1",l,n.id,n.width,n.height,n.x,n.y,t.parent(l)),c.get(n.id).node=n,I(n);else if(t.children(l).length>0){a.info("A pure cluster node XBX1",l,n.id,n.x,n.y,n.width,n.height,t.parent(l)),n.height+=v,t.node(n.parentId);let w=(n==null?void 0:n.padding)/2||0,m=((u=n==null?void 0:n.labelBBox)==null?void 0:u.height)||0,C=m-w||0;a.debug("OffsetY",C,"labelHeight",m,"halfPadding",w),await M(h,n),c.get(n.id).node=n}else{let w=t.node(n.parentId);n.y+=v/2,a.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",w,w==null?void 0:w.offsetY,n),I(n)}})),t.edges().forEach(function(l){let n=t.edge(l);a.info("Edge "+l.v+" -> "+l.w+": "+JSON.stringify(n),n),n.points.forEach(C=>C.y+=v/2);let u=t.node(l.v);var w=t.node(l.w);let m=Y(b,n,c,r,u,w,o);j(n,m)}),t.nodes().forEach(function(l){let n=t.node(l);a.info(l,n.type,n.diff),n.isGroup&&(f=n.diff)}),a.warn("Returning from recursive render XAX",d,f),{elem:d,diff:f}},"recursiveRender"),se=y(async(e,t)=>{var s,i,d,h,b,N;let r=new O({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((s=e.config)==null?void 0:s.nodeSpacing)||((d=(i=e.config)==null?void 0:i.flowchart)==null?void 0:d.nodeSpacing)||e.nodeSpacing,ranksep:((h=e.config)==null?void 0:h.rankSpacing)||((N=(b=e.config)==null?void 0:b.flowchart)==null?void 0:N.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=t.select("g");Q(o,e.markers,e.type,e.diagramId),H(),q(),z(),V(),e.nodes.forEach(p=>{r.setNode(p.id,{...p}),p.parentId&&r.setParent(p.id,p.parentId)}),a.debug("Edges:",e.edges),e.edges.forEach(p=>{if(p.start===p.end){let f=p.start,v=f+"---"+f+"---1",l=f+"---"+f+"---2",n=r.node(f);r.setNode(v,{domId:v,id:v,parentId:n.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),r.setParent(v,n.parentId),r.setNode(l,{domId:l,id:l,parentId:n.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),r.setParent(l,n.parentId);let u=structuredClone(p),w=structuredClone(p),m=structuredClone(p);u.label="",u.arrowTypeEnd="none",u.id=f+"-cyclic-special-1",w.arrowTypeEnd="none",w.id=f+"-cyclic-special-mid",m.label="",n.isGroup&&(u.fromCluster=f,m.toCluster=f),m.id=f+"-cyclic-special-2",r.setEdge(f,v,u,f+"-cyclic-special-0"),r.setEdge(v,l,w,f+"-cyclic-special-1"),r.setEdge(l,f,m,f+"-cyc<lic-special-2")}else r.setEdge(p.start,p.end,{...p},p.id)}),a.warn("Graph at first:",JSON.stringify(X(r))),_(r),a.warn("Graph after XAX:",JSON.stringify(X(r)));let g=K();await A(o,r,e.type,e.diagramId,void 0,g)},"render");export{se as render};
