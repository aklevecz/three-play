(self.webpackChunkthreescape=self.webpackChunkthreescape||[]).push([[826],{466:(n,r,t)=>{"use strict";t.d(r,{Z:()=>g});var e=t(645),o=t.n(e),i=t(667),a=t.n(i),s=t(85),c=o()((function(n){return n[1]})),l=a()(s);c.push([n.id,"@font-face {\r\n  font-family: Euclid;\r\n  src: url("+l+') format("woff");\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\ndiv {\r\n  font-family: Euclid;\r\n}\r\n',""]);const g=c},826:(n,r,t)=>{"use strict";var e=t(379),o=t.n(e),i=t(466);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(212),s=t(219),c=t(875),l=t(886);let g=200;const v={particlesData:[],positions:null,colors:null,particles:new a.u9r,pointCloud:new a.woe,particlePositions:null,linesMesh:null,group:new a.ZAu,uuids:[],uniforms:{},sizes:[]};function f(){let n=0,r=0,t=0;const e=.01*Date.now(),o=.5*(20+20*Math.sin(.1*e)),i=v.pointCloud.geometry;for(let n=0;n<g;n++)v.particlesData[n].numConnections=0;for(let e=0;e<g;e++){const a=v.particlesData[e];if(v.particlePositions[3*e]+=a.velocity.x,v.particlePositions[3*e+1]+=a.velocity.y,v.particlePositions[3*e+2]+=a.velocity.z,(v.particlePositions[3*e+1]<-400||v.particlePositions[3*e+1]>400)&&(a.velocity.y=-a.velocity.y),(v.particlePositions[3*e]<-400||v.particlePositions[3*e]>400)&&(a.velocity.x=-a.velocity.x),(v.particlePositions[3*e+2]<-400||v.particlePositions[3*e+2]>400)&&(a.velocity.z=-a.velocity.z),u.limitConnections&&a.numConnections>=u.maxConnections)continue;const{x:s,y:c,z:l}=k.camera.position,f=v.particlePositions[3*e]-s,m=v.particlePositions[3*e+1]-c,d=v.particlePositions[3*e+2]-l;Math.sqrt(f*f+m*m+d*d)<100&&i.attributes.size.array,i.attributes.size.array[e]=o+.1*e;for(let o=e+1;o<g;o++){const i=v.particlesData[o];if(u.limitConnections&&i.numConnections>=u.maxConnections)continue;const s=v.particlePositions[3*e]-v.particlePositions[3*o],c=v.particlePositions[3*e+1]-v.particlePositions[3*o+1],l=v.particlePositions[3*e+2]-v.particlePositions[3*o+2],g=Math.sqrt(s*s+c*c+l*l);if(g<u.minDistance){a.numConnections++,i.numConnections++;const s=1-g/u.minDistance;v.positions[n++]=v.particlePositions[3*e],v.positions[n++]=v.particlePositions[3*e+1],v.positions[n++]=v.particlePositions[3*e+2],v.positions[n++]=v.particlePositions[3*o],v.positions[n++]=v.particlePositions[3*o+1],v.positions[n++]=v.particlePositions[3*o+2],v.colors[r++]=s,v.colors[r++]=s,v.colors[r++]=s,v.colors[r++]=s,v.colors[r++]=s,v.colors[r++]=s,t++}}}const a=v.linesMesh.geometry;a.setDrawRange(0,2*t),a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0,i.attributes.position.needsUpdate=!0,i.attributes.size.needsUpdate=!0}const u={showDots:!0,showLines:!0,minDistance:150,limitConnections:!1,maxConnections:20,particleCount:500,resolution:!1};function m(){(function(){!function(){const{gui:n}=k;n.add(u,"showDots").onChange((function(n){v.pointCloud.visible=n})),n.add(u,"showLines").onChange((function(n){v.linesMesh.visible=n})),n.add(u,"minDistance",10,300),n.add(u,"maxConnections",0,30,1),n.add(u,"limitConnections"),n.add(u,"particleCount",0,1e3,1).onChange((function(n){g=parseInt(n),v.particles.setDrawRange(0,g)}))}(),v.positions=new Float32Array(3e6),v.colors=new Float32Array(3e6);const n=(new a.dpR).load(t(363));v.uniforms={pointTexture:{value:n},u_color:{value:new a.Pa4(1,0,0)}},n.flipY=!1,new a.jyz({uniforms:v.uniforms,vertexShader:t(403),fragmentShader:t(368),depthTest:!1,transparent:!0,alphaTest:0,opacity:0,vertexColors:!0}),new a.UY4({vertexColors:!0,color:16777215,size:30,blending:a.WMw,transparent:!0,sizeAttenuation:!1});const r=new a.jyz({fragmentShader:t(348),vertexShader:t(170),vertexColors:!0,blending:a.WMw});v.particlePositions=new Float32Array(3e3),v.sizes=[];for(let n=0;n<1e3;n++){const r=800*Math.random()-400,t=800*Math.random()-400,e=800*Math.random()-400;v.particlePositions[3*n]=r,v.particlePositions[3*n+1]=t,v.particlePositions[3*n+2]=e,v.colors[3*n]=Math.random(),v.colors[3*n+1]=Math.random(),v.colors[3*n+2]=Math.random(),v.particlesData.push({velocity:new a.Pa4(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1),numConnections:0}),v.sizes.push(50*Math.random())}v.particles.setDrawRange(0,g),v.particles.setAttribute("position",new a.TlE(v.particlePositions,3).setUsage(a.dj0)),v.particles.setAttribute("color",new a.TlE(v.colors,3).setUsage(a.dj0)),v.particles.setAttribute("size",new a.a$l(v.sizes,1).setUsage(a.dj0)),v.pointCloud=new a.woe(v.particles,r),v.group.add(v.pointCloud),v.uuids.push(v.pointCloud.uuid)})(),function(){const n=new a.u9r;n.setAttribute("position",new a.TlE(v.positions,3).setUsage(a.dj0)),n.setAttribute("color",new a.TlE(v.colors,3).setUsage(a.dj0)),n.computeBoundingSphere(),n.setDrawRange(0,0);const r=new a.nls({vertexColors:!0,blending:a.WMw,transparent:!0,linewidth:4});v.linesMesh=new a.ejS(n,r),v.group.add(v.linesMesh),v.uuids.push(v.linesMesh.uuid),k.group.add(v.group)}()}var d,x,p,y,w,z;function P(){Date.now(),p.uniforms.time.value+=.002}const h=[1,2,3].map((n=>t(356)(`./textures/dj${n}.png`))).map((n=>(new a.dpR).load(n)));let b=0;function U(){const n=z.material;n.uniforms.time.value=b;const r=.5*(1+Math.sin(.1*b));n.uniforms.progress.value=r,b+=_.time}const _={progress:0,intensity:0,changeShader:"shatter",radius:.9,width:.35,time:.09};var D,C;const S=[{object:{intensity:0},name:"intensity",min:0,max:100,step:.1}];function j(n=S,r="Laser"){const{gui:e}=k,o=z.material;(C=e.addFolder("Switch")).add(_,"changeShader",{Shatter:"shatter",Blob:"blob",Swipe:"swipe",Up:"up",Ripple:"ripple",Disintegrate:"disintegrate",Split:"split"}).onChange((function(n){const r=M[n];var e,o;e=r.controller,o=r.name,k.gui.removeFolder(D),D=k.gui.addFolder(o),e.forEach((n=>D.add(n.object,n.name,n.min,n.max,n.step).onChange((function(r){z.material.uniforms[n.name].value=r})))),D.open(),function(n="trans-fragment"){const r=new a.jyz({uniforms:Object.assign(Object.assign({},V),{texture1:{value:h[0]},texture2:{value:h[1]},displacement:{value:(new a.dpR).load(t(934))},resolution:{value:new a.Ltg}}),vertexShader:t(314),fragmentShader:t(141)(`./${n}.glsl`),depthWrite:!1,depthTest:!1});r.uniforms.resolution.value.x=window.innerWidth,r.uniforms.resolution.value.y=window.innerHeight,r.uniforms.resolution.value.z=1,r.uniforms.resolution.value.w=1,z.material=r}(r.shader)})),C.add(_,"time",.001,5,.001),C.open(),(D=e.addFolder(r)).open(),D.add(_,"progress",0,1,.01).onChange((function(n){o.uniforms.progress.value=n})),n.forEach((n=>D.add(n.object,n.name,n.min,n.max,n.step).onChange((function(r){o.uniforms[n.name].value=r}))))}const M={blob:{name:"Blob",shader:"blob-fragment",controller:[{object:{radius:.9},name:"radius",min:0,max:2,step:.1},{object:{width:.35},name:"width",min:0,max:10,step:.1}]},shatter:{name:"Shatter",shader:"trans-fragment",controller:S},swipe:{name:"Swipe",shader:"swipe-fragment",controller:[{object:{width:.5},name:"width",min:0,max:10,step:.1},{object:{scaleX:40},name:"scaleX",min:.1,max:60,step:.1},{object:{scaleY:40},name:"scaleY",min:.1,max:60,step:.1}]},up:{name:"Up",shader:"up-fragment",controller:[{object:{width:.5},name:"width",min:0,max:10,step:.1}]},ripple:{name:"Ripple",shader:"ripple-fragment",controller:[{object:{width:.5},name:"width",min:0,max:10,step:.1}]},disintegrate:{name:"Disintegrate",shader:"disintegrate-fragment",controller:[{object:{intensity:1},name:"intensity",min:0,max:5,step:.1}]},split:{name:"Split",shader:"split-fragment",controller:[{object:{intensity:1},name:"intensity",min:0,max:5,step:.1}]}},V={time:{value:0},radius:{value:.9},width:{value:.35},progress:{value:0},transition:{value:40},intensity:{value:10.3},scaleX:{value:40},scaleY:{value:40}},F=t(821);let I,E;const k={container:null,stats:(0,s.Z)(),gui:new c.XS,scene:new a.xsS,camera:null,controls:null,group:new a.ZAu,renderer:new a.CP7({antialias:!0}),animations:[]},A={switch:!1};!function(){const n=document.createElement("div");n.id="root",document.body.appendChild(n)}(),function(n=!1,r=800){k.container=document.getElementById("root");const t=window.innerWidth/window.innerHeight;if(k.camera=new a.cPb(45,t,.1,4e3),k.camera.position.z=.01,k.controls=new l.z(k.camera,k.container),k.controls.autoRotate=!0,k.controls.autoRotateSpeed=2,k.controls.maxDistance=3e3,k.scene.add(k.group),k.renderer.setPixelRatio(window.devicePixelRatio),k.renderer.setSize(window.innerWidth,window.innerHeight),k.renderer.outputEncoding=a.knz,k.container.appendChild(k.renderer.domElement),window.addEventListener("resize",(function(){k.camera.aspect=window.innerWidth/window.innerHeight,k.camera.updateProjectionMatrix(),k.renderer.setSize(window.innerWidth,window.innerHeight)}),!1),n){const n=new a.nvb(r,r,r),t=new a.vBJ;t.blending=a.WMw,t.color.setHex(16711680),t.transparent=!0;const e=new a.fQA(new a.Kj0(n,t));k.group.add(e)}}(!1,800),function n(){const{gui:r}=k;r.add(A,"switch").onChange((function(r){r?(k.gui.removeFolder(D),k.gui.removeFolder(C),m(),function(){const n=(new a.dpR).load(t(363));n.wrapS=a.rpg,n.wrapT=a.rpg,x=new a.Aip(150,150,150),new a.vBJ({color:16777215,transparent:!0}),p=new a.jyz({uniforms:{time:{value:0},sphereTexture:{value:n}},vertexShader:t(673),fragmentShader:t(387)}),d=new a.Kj0(x,p),k.scene.add(d)}(),k.animations=[P,f]):(k.gui.destroy(),k.gui=new c.XS,n(),v.group.remove(...v.group.children),k.scene.remove(d),k.animations=[U],j())}))}(),y=new a._12(2,2),(w=new a.jyz({uniforms:{time:{value:0},progress:{value:0},transition:{value:40},intensity:{value:10.3},texture1:{value:h[0]},texture2:{value:h[1]},displacement:{value:(new a.dpR).load(t(934))},resolution:{value:new a.Ltg}},vertexShader:t(314),fragmentShader:t(970),depthWrite:!1,depthTest:!1})).uniforms.resolution.value.x=window.innerWidth,w.uniforms.resolution.value.y=window.innerHeight,w.uniforms.resolution.value.z=1,w.uniforms.resolution.value.w=1,z=new a.Kj0(y,w),k.scene.add(z),j(S),function(){const n=function(n,r){const t=[];for(let n=0;n<6;n++)t[n]=new a.xEZ;const e=new Image;return e.onload=function(){let n,r;const o=e.height;for(let i=0;i<t.length;i++)n=document.createElement("canvas"),r=n.getContext("2d"),n.height=o,n.width=o,r.drawImage(e,o*i,0,o,o,0,0,o,o),t[i].image=n,t[i].needsUpdate=!0},e.src=n,t}(F),r=[];for(let e=0;e<6;e++)r.push(new a.jyz({uniforms:{tex:{value:n[e]}},vertexShader:t(660),fragmentShader:t(987)}));const e=new a.Kj0(new a.nvb(1,1,1),r);e.geometry.scale(1,1,-1),k.scene.add(e)}(),function(){const n=new(window.AudioContext||window.webkitAudioContext);E=n.createAnalyser();const r=new Audio(t(227)),e=document.createElement("audio");e.src=t(227),e.controls=!0,document.body.prepend(e),n.createMediaElementSource(r).connect(E),E.connect(n.destination),E.fftSize=2048;const o=E.frequencyBinCount;I=new Uint8Array(o),function n(){E.getByteFrequencyData(I),requestAnimationFrame(n)}()}(),k.animations.push(U),function n(){k.animations.map((n=>n())),requestAnimationFrame(n),k.stats.update(),Date.now(),k.controls.update(),k.renderer.render(k.scene,k.camera)}()},653:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform float width;\r\nuniform float scaleX;\r\nuniform float scaleY;\r\nuniform float transition;\r\nuniform float radius;\r\nuniform float swipe;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D displacement;\r\nuniform vec4 resolution;\r\n\r\nvarying vec2 vUv;\r\nvarying vec4 vPosition;\r\n\r\nfloat parabola( float x, float k ) {\r\n    return pow( 4. * x * ( 1. - x ), k );\r\n}\r\n\r\nvoid main()\t{\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n    vec2 p = newUV;\r\n    vec2 start = vec2(0.5,0.5);\r\n    vec2 aspect = resolution.wz;\r\n\r\n    vec2 uv = newUV;\r\n    float dt = parabola(progress, 1.);\r\n    vec4 noise = texture2D(displacement, fract(vUv+time*0.04));\r\n    float prog = progress*0.66 + noise.g * 0.04;\r\n    float circ = 1. - smoothstep(-width, 0.0, radius * distance(start*aspect, uv*aspect) - prog*(1.+width));\r\n    float intpl = pow(abs(circ), 1.);\r\n    vec4 t1 = texture2D( texture1, (uv - 0.5) * (1.0 - intpl) + 0.5 ) ;\r\n    vec4 t2 = texture2D( texture2, (uv - 0.5) * intpl + 0.5 );\r\n    gl_FragColor = mix( t1, t2, intpl );\r\n\r\n}"},348:n=>{n.exports="float circle(in vec2 _st, in float _radius) {\r\n    vec2 dist = _st - vec2(0.5);\r\n    return 1.-smoothstep(_radius - (_radius*0.01),\r\n                            _radius + (_radius*0.01),\r\n                            dot(dist,dist)*4.0);\r\n}\r\n\r\nvoid main() {\r\n    vec2 st = gl_PointCoord;\r\n    vec3 color = vec3(circle(st,0.9));\r\n    if (color.r > .0) {\r\n        gl_FragColor = vec4(color, .7);\r\n    } else {\r\n        discard;\r\n    }\r\n}\r\n"},170:n=>{n.exports="attribute float size;\r\nvoid main() {\r\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\r\n    gl_PointSize = size * ( 2500.0 / -mvPosition.z );\r\n\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n}"},987:n=>{n.exports="uniform sampler2D tex;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vec4 texture = texture2D(tex ,  vUv);\r\n    if (texture.r > .5) {\r\n        gl_FragColor = texture;\r\n    } else {\r\n        gl_FragColor = vec4(1.0,0.0,0.0,1.0);\r\n    }\r\n}\r\n"},660:n=>{n.exports="varying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n}"},420:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform float intensity;\r\nuniform float width;\r\nuniform float scaleX;\r\nuniform float scaleY;\r\nuniform float transition;\r\nuniform float radius;\r\nuniform float swipe;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D displacement;\r\nuniform vec4 resolution;\r\nvarying vec2 vUv;\r\nmat2 getRotM(float angle) {\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    return mat2(c, -s, s, c);\r\n}\r\nconst float PI = 3.1415;\r\nconst float angle1 = PI *0.25;\r\nconst float angle2 = -PI *0.75;\r\n\r\n\r\nvoid main()\t{\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n\r\n    vec4 disp = texture2D(displacement, newUV);\r\n    vec2 dispVec = vec2(disp.r, disp.g);\r\n\r\n    vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;\r\n    vec4 t1 = texture2D(texture1, distortedPosition1);\r\n\r\n    vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);\r\n    vec4 t2 = texture2D(texture2, distortedPosition2);\r\n\r\n    gl_FragColor = mix(t1, t2, progress);\r\n\r\n}"},368:n=>{n.exports="uniform sampler2D pointTexture;\r\nuniform vec3 u_color;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vec4 texture = texture2D(pointTexture ,  gl_PointCoord);\r\n    gl_FragColor = vec4(vColor,1.0) * vec4(1.0 - texture.r, 1.0 - texture.g, 1.0 - texture.b, 1.0);\r\n    gl_FragColor = texture;\r\n}\r\n"},387:n=>{n.exports="uniform sampler2D sphereTexture; \r\nvarying vec2 vUv;\r\nvarying float noise;\r\nvarying vec3 vNormal;\r\nvoid main() {\r\n\tvec2 uv = normalize( vNormal ).xy * 0.5 + 0.5;\r\n\t// vec4 texto = texture( sphereTexture, uv*40. );\r\n    float noiseColor = 1. - .4 * noise;\r\n    vec3 color = vec3(noiseColor);\r\n    // gl_FragColor = vec4( color.rgb, 1.0 ) * texture;\r\n    gl_FragColor = vec4(color, 1.0);\r\n}"},673:n=>{n.exports="// Include the Ashima code here!\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\nvarying float noise;\r\nuniform float time;\r\n  \r\n  vec3 mod289(vec3 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 mod289(vec4 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 permute(vec4 x)\r\n{\r\n  return mod289(((x*34.0)+1.0)*x);\r\n}\r\n\r\nvec4 taylorInvSqrt(vec4 r)\r\n{\r\n  return 1.79284291400159 - 0.85373472095314 * r;\r\n}\r\n\r\nvec3 fade(vec3 t) {\r\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\r\n}\r\n\r\n// Classic Perlin noise\r\nfloat cnoise(vec3 P)\r\n{\r\n  vec3 Pi0 = floor(P); // Integer part for indexing\r\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r\n  return 2.2 * n_xyz;\r\n}\r\n\r\n// Classic Perlin noise, periodic variant\r\nfloat pnoise(vec3 P, vec3 rep)\r\n{\r\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r\n  return 2.2 * n_xyz;\r\n}\r\n\r\nfloat turbulence( vec3 p ) {\r\n    float w = 100.0;\r\n    float t = -.5;\r\n    for (float f = 1.0 ; f <= 10.0 ; f++ ){\r\n        float power = pow( 2.0, f );\r\n        t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );\r\n    }\r\n    return t;\r\n}\r\n\r\nvoid main() {\r\n\r\n    vUv = uv;\r\n    vNormal = normal;\r\n    // add time to the noise parameters so it's animated\r\n    noise = 10.0 *  -.10 * turbulence( .5 * normal + time );\r\n    float b = 10.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );\r\n    float displacement = - noise + b;\r\n    \r\n    vec3 newPosition = position + normal * displacement;\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\r\n\r\n}"},720:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform float width;\r\nuniform float scaleX;\r\nuniform float scaleY;\r\nuniform float transition;\r\nuniform float radius;\r\nuniform float swipe;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D displacement;\r\nuniform vec4 resolution;\r\n\r\nvarying vec2 vUv;\r\nvarying vec4 vPosition;\r\nvec2 mirrored(vec2 v) {\r\n    vec2 m = mod(v,2.);\r\n    return mix(m,2.0 - m, step(1.0 ,m));\r\n}\r\n\r\nvoid main()\t{\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n    vec4 noise = texture2D(displacement, mirrored(newUV+time*0.04));\r\n    // float prog = 0.6*progress + 0.2 + noise.g * 0.06;\r\n    float prog = progress*0.8 -0.05 + noise.g * 0.06;\r\n    float intpl = pow(abs(smoothstep(0., 1., (prog*2. - vUv.x + 0.5))), 10.);\r\n    \r\n    vec4 t1 = texture2D( texture1, (newUV - 0.5) * (1.0 - intpl) + 0.5 ) ;\r\n    vec4 t2 = texture2D( texture2, (newUV - 0.5) * intpl + 0.5 );\r\n    gl_FragColor = mix( t1, t2, intpl );\r\n\r\n}"},990:n=>{n.exports="#define GATHER_RED_COMPONENT 0;\r\nvarying vec2 vUv;\r\nuniform sampler2D text;\r\nuniform sampler2D text2;\r\nvoid main() {\r\n    vec4 t = texture2D(text, vUv);\r\n    vec4 t2 = texture2D(text2, vUv);\r\n\r\n    vec4 tmp = mix(t,t2,1.);\r\n    gl_FragColor = tmp;\r\n}"},820:n=>{n.exports="varying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = vec4(position, 1.0);\r\n}"},708:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform float intensity;\r\nuniform float width;\r\nuniform float scaleX;\r\nuniform float scaleY;\r\nuniform float transition;\r\nuniform float radius;\r\nuniform float swipe;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D displacement;\r\nuniform vec4 resolution;\r\nvarying vec2 vUv;\r\nmat2 rotate(float a) {\r\n    float s = sin(a);\r\n    float c = cos(a);\r\n    return mat2(c, -s, s, c);\r\n}\r\nconst float PI = 3.1415;\r\nconst float angle1 = PI *0.25;\r\nconst float angle2 = -PI *0.75;\r\n\r\nconst float noiseSeed = 2.;\r\n\r\nfloat random() { \r\n    return fract(sin(noiseSeed + dot(gl_FragCoord.xy / resolution.xy / 10.0, vec2(12.9898, 4.1414))) * 43758.5453);\r\n}\r\n\r\nfloat hash(float n) { return fract(sin(n) * 1e4); }\r\nfloat hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\r\n\r\nfloat hnoise(vec2 x) {\r\n    vec2 i = floor(x);\r\n    vec2 f = fract(x);\r\n\r\n    float a = hash(i);\r\n    float b = hash(i + vec2(1.0, 0.0));\r\n    float c = hash(i + vec2(0.0, 1.0));\r\n    float d = hash(i + vec2(1.0, 1.0));\r\n\r\n    vec2 u = f * f * (3.0 - 2.0 * f);\r\n    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\r\n}\r\n\r\n\r\nvoid main()\t{\r\n\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n    \r\n    float hn = hnoise(newUV.xy * resolution.xy / 100.0);\r\n\r\n    vec2 d = vec2(0.,normalize(vec2(0.5,0.5) - newUV.xy).y);\r\n\r\n    vec2 uv1 = newUV + d * progress / 5.0 * (1.0 + hn / 2.0);\r\n    vec2 uv2 = newUV - d * (1.0 - progress) / 5.0 * (1.0 + hn / 2.0);\r\n\r\n    vec4 t1 = texture2D(texture1,uv1);\r\n    vec4 t2 = texture2D(texture2,uv2);\r\n\r\n    gl_FragColor = mix(t1, t2, progress);\r\n\r\n}"},561:n=>{n.exports="uniform float time;\r\n\t\tuniform float progress;\r\n\t\tuniform float width;\r\n\t\tuniform float scaleX;\r\n\t\t// uniform float border;\r\n\t\tuniform float scaleY;\r\n\t\tuniform sampler2D texture1;\r\n\t\tuniform sampler2D texture2;\r\n\t\tuniform sampler2D displacement;\r\n\t\tuniform vec4 resolution;\r\n\r\n\t\tvarying vec2 vUv;\r\n\t\tvarying vec4 vPosition;\r\n\r\n\t\t//\tClassic Perlin 3D Noise \r\n\t\t//\tby Stefan Gustavson\r\n\t\t//\r\n\t\tvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r\n\t\tvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r\n\t\tvec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\r\n\r\n\t\tfloat cnoise(vec4 P){\r\n\t\t  ;\r\n\t\t  vec4 Pi0 = floor(P); // Integer part for indexing\r\n\t\t  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1\r\n\t\t  Pi0 = mod(Pi0, 289.0);\r\n\t\t  Pi1 = mod(Pi1, 289.0);\r\n\t\t  vec4 Pf0 = fract(P); // Fractional part for interpolation\r\n\t\t  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0\r\n\t\t  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n\t\t  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n\t\t  vec4 iz0 = vec4(Pi0.zzzz);\r\n\t\t  vec4 iz1 = vec4(Pi1.zzzz);\r\n\t\t  vec4 iw0 = vec4(Pi0.wwww);\r\n\t\t  vec4 iw1 = vec4(Pi1.wwww);\r\n\r\n\t\t  vec4 ixy = permute(permute(ix) + iy);\r\n\t\t  vec4 ixy0 = permute(ixy + iz0);\r\n\t\t  vec4 ixy1 = permute(ixy + iz1);\r\n\t\t  vec4 ixy00 = permute(ixy0 + iw0);\r\n\t\t  vec4 ixy01 = permute(ixy0 + iw1);\r\n\t\t  vec4 ixy10 = permute(ixy1 + iw0);\r\n\t\t  vec4 ixy11 = permute(ixy1 + iw1);\r\n\r\n\t\t  vec4 gx00 = ixy00 / 7.0;\r\n\t\t  vec4 gy00 = floor(gx00) / 7.0;\r\n\t\t  vec4 gz00 = floor(gy00) / 6.0;\r\n\t\t  gx00 = fract(gx00) - 0.5;\r\n\t\t  gy00 = fract(gy00) - 0.5;\r\n\t\t  gz00 = fract(gz00) - 0.5;\r\n\t\t  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\r\n\t\t  vec4 sw00 = step(gw00, vec4(0.0));\r\n\t\t  gx00 -= sw00 * (step(0.0, gx00) - 0.5);\r\n\t\t  gy00 -= sw00 * (step(0.0, gy00) - 0.5);\r\n\r\n\t\t  vec4 gx01 = ixy01 / 7.0;\r\n\t\t  vec4 gy01 = floor(gx01) / 7.0;\r\n\t\t  vec4 gz01 = floor(gy01) / 6.0;\r\n\t\t  gx01 = fract(gx01) - 0.5;\r\n\t\t  gy01 = fract(gy01) - 0.5;\r\n\t\t  gz01 = fract(gz01) - 0.5;\r\n\t\t  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\r\n\t\t  vec4 sw01 = step(gw01, vec4(0.0));\r\n\t\t  gx01 -= sw01 * (step(0.0, gx01) - 0.5);\r\n\t\t  gy01 -= sw01 * (step(0.0, gy01) - 0.5);\r\n\r\n\t\t  vec4 gx10 = ixy10 / 7.0;\r\n\t\t  vec4 gy10 = floor(gx10) / 7.0;\r\n\t\t  vec4 gz10 = floor(gy10) / 6.0;\r\n\t\t  gx10 = fract(gx10) - 0.5;\r\n\t\t  gy10 = fract(gy10) - 0.5;\r\n\t\t  gz10 = fract(gz10) - 0.5;\r\n\t\t  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\r\n\t\t  vec4 sw10 = step(gw10, vec4(0.0));\r\n\t\t  gx10 -= sw10 * (step(0.0, gx10) - 0.5);\r\n\t\t  gy10 -= sw10 * (step(0.0, gy10) - 0.5);\r\n\r\n\t\t  vec4 gx11 = ixy11 / 7.0;\r\n\t\t  vec4 gy11 = floor(gx11) / 7.0;\r\n\t\t  vec4 gz11 = floor(gy11) / 6.0;\r\n\t\t  gx11 = fract(gx11) - 0.5;\r\n\t\t  gy11 = fract(gy11) - 0.5;\r\n\t\t  gz11 = fract(gz11) - 0.5;\r\n\t\t  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\r\n\t\t  vec4 sw11 = step(gw11, vec4(0.0));\r\n\t\t  gx11 -= sw11 * (step(0.0, gx11) - 0.5);\r\n\t\t  gy11 -= sw11 * (step(0.0, gy11) - 0.5);\r\n\r\n\t\t  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\r\n\t\t  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\r\n\t\t  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\r\n\t\t  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\r\n\t\t  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\r\n\t\t  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\r\n\t\t  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\r\n\t\t  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\r\n\t\t  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\r\n\t\t  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\r\n\t\t  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\r\n\t\t  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\r\n\t\t  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\r\n\t\t  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\r\n\t\t  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\r\n\t\t  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);\r\n\r\n\t\t  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\r\n\t\t  g0000 *= norm00.x;\r\n\t\t  g0100 *= norm00.y;\r\n\t\t  g1000 *= norm00.z;\r\n\t\t  g1100 *= norm00.w;\r\n\r\n\t\t  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\r\n\t\t  g0001 *= norm01.x;\r\n\t\t  g0101 *= norm01.y;\r\n\t\t  g1001 *= norm01.z;\r\n\t\t  g1101 *= norm01.w;\r\n\r\n\t\t  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\r\n\t\t  g0010 *= norm10.x;\r\n\t\t  g0110 *= norm10.y;\r\n\t\t  g1010 *= norm10.z;\r\n\t\t  g1110 *= norm10.w;\r\n\r\n\t\t  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\r\n\t\t  g0011 *= norm11.x;\r\n\t\t  g0111 *= norm11.y;\r\n\t\t  g1011 *= norm11.z;\r\n\t\t  g1111 *= norm11.w;\r\n\r\n\t\t  float n0000 = dot(g0000, Pf0);\r\n\t\t  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\r\n\t\t  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\r\n\t\t  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\r\n\t\t  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\r\n\t\t  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\r\n\t\t  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\r\n\t\t  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\r\n\t\t  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\r\n\t\t  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\r\n\t\t  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\r\n\t\t  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\r\n\t\t  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\r\n\t\t  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\r\n\t\t  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\r\n\t\t  float n1111 = dot(g1111, Pf1);\r\n\r\n\t\t  vec4 fade_xyzw = fade(Pf0);\r\n\t\t  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\r\n\t\t  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\r\n\t\t  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\r\n\t\t  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\r\n\t\t  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\r\n\t\t  return 2.2 * n_xyzw;\r\n\t\t}\r\n\r\n\r\n\t\tfloat map(float value, float min1, float max1, float min2, float max2) {\r\n\t\t  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\r\n\t\t}\r\n\r\n\t\tfloat parabola( float x, float k ) {\r\n\t\t  return pow( 4. * x * ( 1. - x ), k );\r\n\t\t}\r\n\r\n\r\n\t\tvoid main()\t{\r\n\t\t\tfloat dt = parabola(progress,1.);\r\n\t\t\tfloat border = 1.;\r\n\t\t\tvec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n\t\t\tvec4 color1 = texture2D(texture1,newUV);\r\n\t\t\tvec4 color2 = texture2D(texture2,newUV);\r\n\t\t\tvec4 d = texture2D(displacement,vec2(newUV.x*scaleX,newUV.y*scaleY));\r\n\r\n\t\t\tfloat realnoise = 0.5*(cnoise(vec4(newUV.x*scaleX  + 0.*time/3., newUV.y*scaleY,0.*time/3.,0.)) +1.);\r\n\r\n\t\t\tfloat w = width*dt;\r\n\r\n\t\t\tfloat maskvalue = smoothstep(1. - w,1.,vUv.x + mix(-w/2., 1. - w/2., progress));\r\n\t\t\tfloat maskvalue0 = smoothstep(1.,1.,vUv.x + progress);\r\n\r\n\r\n\r\n\t\t\tfloat mask = maskvalue + maskvalue*realnoise;\r\n\t\t\t// float mask = maskvalue;\r\n\r\n\t\t\tfloat final = smoothstep(border,border+0.01,mask);\r\n\r\n\t\t\tgl_FragColor = mix(color1,color2,final);\r\n\t\t\t// gl_FragColor =vec4(maskvalue0,final,0.,1.);\r\n\t\t}"},970:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform float width;\r\nuniform float scaleX;\r\nuniform float scaleY;\r\nuniform float transition;\r\nuniform float radius;\r\nuniform float intensity;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D displacement;\r\nuniform vec4 resolution;\r\nvarying vec2 vUv;\r\n\r\nvoid main()\t{\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n\r\n    vec4 d1 = texture2D(texture1, newUV);\r\n    vec4 d2 = texture2D(texture2, newUV);\r\n\r\n    float displace1 = (d1.r + d1.g + d1.b)*0.33;\r\n    float displace2 = (d2.r + d2.g + d2.b)*0.33;\r\n    \r\n    vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));\r\n    vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));\r\n\r\n    gl_FragColor = mix(t1, t2, progress);\r\n\r\n}\r\n"},314:n=>{n.exports="varying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = vec4(position, 1.0);\r\n}"},353:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform vec4 resolution;\r\n\r\nvarying vec2 vUv;\r\nvarying vec4 vPosition;\r\n\r\n\r\nvoid main()\t{\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n    vec2 p = newUV;\r\n    float x = progress;\r\n    x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));\r\n    vec4 f = mix(\r\n        texture2D(texture1, (p-.5)*(1.-x)+.5), \r\n        texture2D(texture2, (p-.5)*x+.5), \r\n        x);\r\n    gl_FragColor = f;\r\n}"},403:n=>{n.exports="attribute float size;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    vColor = color;\r\n\r\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\r\n    gl_PointSize = size * ( 300.0 / -mvPosition.z );\r\n\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n}"},141:(n,r,t)=>{var e={"./blob-fragment.glsl":653,"./circle-fragment.glsl":348,"./circle-vertex.glsl":170,"./cube-fragment.glsl":987,"./cube-vertex.glsl":660,"./disintegrate-fragment.glsl":420,"./fragment.glsl":368,"./perlin-fragment.glsl":387,"./perlin-vertex.glsl":673,"./ripple-fragment.glsl":720,"./screen-fragment.glsl":990,"./screen-vertex.glsl":820,"./split-fragment.glsl":708,"./swipe-fragment.glsl":561,"./trans-fragment.glsl":970,"./trans-vertex.glsl":314,"./up-fragment.glsl":353,"./vertex.glsl":403};function o(n){var r=i(n);return t(r)}function i(n){if(!t.o(e,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return e[n]}o.keys=function(){return Object.keys(e)},o.resolve=i,n.exports=o,o.id=141},227:(n,r,t)=>{"use strict";n.exports=t.p+"27850df221cfadcfbd55.mp3"},85:(n,r,t)=>{"use strict";n.exports=t.p+"727a249c9815fda17bf8.woff"},859:(n,r,t)=>{"use strict";n.exports=t.p+"0cbe7d345e07997594cb.png"},861:(n,r,t)=>{"use strict";n.exports=t.p+"d77cd4114b911168c3ac.png"},337:(n,r,t)=>{"use strict";n.exports=t.p+"0a2e7606d6e94c34de12.png"},241:(n,r,t)=>{"use strict";n.exports=t.p+"ae53f574e13a03189cf0.png"},363:(n,r,t)=>{"use strict";n.exports=t.p+"3c29d552d5cdd9229435.png"},934:(n,r,t)=>{"use strict";n.exports=t.p+"bbd4a52d8d00cd6ca9a2.jpg"},821:(n,r,t)=>{"use strict";n.exports=t.p+"19998fb8935f2d983d34.jpg"},356:(n,r,t)=>{var e={"./textures/dj1.png":859,"./textures/dj2.png":861,"./textures/dj3.png":337,"./textures/dj4.png":241};function o(n){var r=i(n);return t(r)}function i(n){if(!t.o(e,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return e[n]}o.keys=function(){return Object.keys(e)},o.resolve=i,n.exports=o,o.id=356}},0,[[826,666,216]]]);