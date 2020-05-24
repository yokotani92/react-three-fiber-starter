(this["webpackJsonpstudy-react-three-fiber"]=this["webpackJsonpstudy-react-three-fiber"]||[]).push([[6],{28:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(27);function i(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(i.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),i.FullScreenQuad=function(){var e=new a.OrthographicCamera(-1,1,1,-1,0,1),t=new a.PlaneBufferGeometry(2,2),r=function(e){this._mesh=new a.Mesh(t,e)};return Object.defineProperty(r.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(r.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,e)}}),r}()},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")}},32:function(e,t,r){"use strict";var a=r(29),i=r(0),s=r.n(i);function n(){var e=Object(a.a)(["\n    color: white;\n    position: absolute;\n    top: 2%;\n    left: 5%;\n    z-index: 100;\n    font-family: Sans-Serif;\n"]);return n=function(){return e},e}var o=r(30).a.h1(n());t.a=function(e){return s.a.createElement(o,null,e.title)}},33:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(28),i=function(e,t,r,i,s){a.a.call(this),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=void 0!==s?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};i.prototype=Object.assign(Object.create(a.a.prototype),{constructor:i,render:function(e,t,r){var a,i,s,n=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(a=e.getClearColor().getHex(),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(a,i),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=n}})},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(27),i=r(31),s=r(28),n=function(e,t){s.a.call(this),this.textureID=void 0!==t?t:"tDiffuse",e instanceof a.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.UniformsUtils.clone(e.uniforms),this.material=new a.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new s.a.FullScreenQuad(this.material)};n.prototype=Object.assign(Object.create(s.a.prototype),{constructor:n,render:function(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}});var o=function(e,t){s.a.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1};o.prototype=Object.assign(Object.create(s.a.prototype),{constructor:o,render:function(e,t,r){var a,i,s=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(a=0,i=1):(a=1,i=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),n.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),n.buffers.stencil.setClear(i),n.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(s.EQUAL,1,4294967295),n.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),n.buffers.stencil.setLocked(!0)}});var l=function(){s.a.call(this),this.needsSwap=!1};l.prototype=Object.create(s.a.prototype),Object.assign(l.prototype,{render:function(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}});var c=function(e,t){if(this.renderer=e,void 0===t){var r={minFilter:a.LinearFilter,magFilter:a.LinearFilter,format:a.RGBAFormat,stencilBuffer:!1},s=e.getSize(new a.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=s.width,this._height=s.height,(t=new a.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===i.a&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===n&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new n(i.a),this.clock=new a.Clock};Object.assign(c.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(e,t){this.passes.splice(t,0,e)},isLastEnabledPass:function(e){for(var t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0},render:function(e){void 0===e&&(e=this.clock.getDelta());var t,r,a=this.renderer.getRenderTarget(),i=!1,s=this.passes.length;for(r=0;r<s;r++)if(!1!==(t=this.passes[r]).enabled){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),t.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),t.needsSwap){if(i){var n=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==o&&(t instanceof o?i=!0:t instanceof l&&(i=!1))}this.renderer.setRenderTarget(a)},reset:function(e){if(void 0===e){var t=this.renderer.getSize(new a.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this._width=e,this._height=t;var r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(var i=0;i<this.passes.length;i++)this.passes[i].setSize(r,a)},setPixelRatio:function(e){this._pixelRatio=e,this.setSize(this._width,this._height)}});var f=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(f.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),f.FullScreenQuad=function(){var e=new a.OrthographicCamera(-1,1,1,-1,0,1),t=new a.PlaneBufferGeometry(2,2),r=function(e){this._mesh=new a.Mesh(t,e)};return Object.defineProperty(r.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(r.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,e)}}),r}()},39:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(27),i=r(28),s={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:["varying vec2 vUV;","void main() {","\tvUV = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join("\n"),fragmentShader:["#define SQRT2_MINUS_ONE 0.41421356","#define SQRT2_HALF_MINUS_ONE 0.20710678","#define PI2 6.28318531","#define SHAPE_DOT 1","#define SHAPE_ELLIPSE 2","#define SHAPE_LINE 3","#define SHAPE_SQUARE 4","#define BLENDING_LINEAR 1","#define BLENDING_MULTIPLY 2","#define BLENDING_ADD 3","#define BLENDING_LIGHTER 4","#define BLENDING_DARKER 5","uniform sampler2D tDiffuse;","uniform float radius;","uniform float rotateR;","uniform float rotateG;","uniform float rotateB;","uniform float scatter;","uniform float width;","uniform float height;","uniform int shape;","uniform bool disable;","uniform float blending;","uniform int blendingMode;","varying vec2 vUV;","uniform bool greyscale;","const int samples = 8;","float blend( float a, float b, float t ) {","\treturn a * ( 1.0 - t ) + b * t;","}","float hypot( float x, float y ) {","\treturn sqrt( x * x + y * y );","}","float rand( vec2 seed ){","return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );","}","float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {","\tfloat dist = hypot( coord.x - p.x, coord.y - p.y );","\tfloat rad = channel;","\tif ( shape == SHAPE_DOT ) {","\t\trad = pow( abs( rad ), 1.125 ) * rad_max;","\t} else if ( shape == SHAPE_ELLIPSE ) {","\t\trad = pow( abs( rad ), 1.125 ) * rad_max;","\t\tif ( dist != 0.0 ) {","\t\t\tfloat dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );","\t\t\tdist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;","\t\t}","\t} else if ( shape == SHAPE_LINE ) {","\t\trad = pow( abs( rad ), 1.5) * rad_max;","\t\tfloat dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;","\t\tdist = hypot( normal.x * dot_p, normal.y * dot_p );","\t} else if ( shape == SHAPE_SQUARE ) {","\t\tfloat theta = atan( p.y - coord.y, p.x - coord.x ) - angle;","\t\tfloat sin_t = abs( sin( theta ) );","\t\tfloat cos_t = abs( cos( theta ) );","\t\trad = pow( abs( rad ), 1.4 );","\t\trad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );","\t}","\treturn rad - dist;","}","struct Cell {","\tvec2 normal;","\tvec2 p1;","\tvec2 p2;","\tvec2 p3;","\tvec2 p4;","\tfloat samp2;","\tfloat samp1;","\tfloat samp3;","\tfloat samp4;","};","vec4 getSample( vec2 point ) {","\tvec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );","\tfloat base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;","\tfloat step = PI2 / float( samples );","\tfloat dist = radius * 0.66;","\tfor ( int i = 0; i < samples; ++i ) {","\t\tfloat r = base + step * float( i );","\t\tvec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );","\t\ttex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );","\t}","\ttex /= float( samples ) + 1.0;","\treturn tex;","}","float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {","\tfloat dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;","\tif ( channel == 0 ) {","\t\tc.samp1 = getSample( c.p1 ).r;","\t\tc.samp2 = getSample( c.p2 ).r;","\t\tc.samp3 = getSample( c.p3 ).r;","\t\tc.samp4 = getSample( c.p4 ).r;","\t} else if (channel == 1) {","\t\tc.samp1 = getSample( c.p1 ).g;","\t\tc.samp2 = getSample( c.p2 ).g;","\t\tc.samp3 = getSample( c.p3 ).g;","\t\tc.samp4 = getSample( c.p4 ).g;","\t} else {","\t\tc.samp1 = getSample( c.p1 ).b;","\t\tc.samp3 = getSample( c.p3 ).b;","\t\tc.samp2 = getSample( c.p2 ).b;","\t\tc.samp4 = getSample( c.p4 ).b;","\t}","\tdist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );","\tdist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );","\tdist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );","\tdist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );","\tres = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;","\tres += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;","\tres += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;","\tres += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;","\tres = clamp( res, 0.0, 1.0 );","\treturn res;","}","Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {","\tCell c;","\tvec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );","\tfloat threshold = step * 0.5;","\tfloat dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );","\tfloat dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );","\tvec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );","\tfloat offset_normal = mod( hypot( offset.x, offset.y ), step );","\tfloat normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;","\tfloat normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;","\tfloat offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );","\tfloat line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;","\tfloat line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;","\tc.normal = n;","\tc.p1.x = p.x - n.x * normal_scale + n.y * line_scale;","\tc.p1.y = p.y - n.y * normal_scale - n.x * line_scale;","\tif ( scatter != 0.0 ) {","\t\tfloat off_mag = scatter * threshold * 0.5;","\t\tfloat off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;","\t\tc.p1.x += cos( off_angle ) * off_mag;","\t\tc.p1.y += sin( off_angle ) * off_mag;","\t}","\tfloat normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );","\tfloat line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );","\tc.p2.x = c.p1.x - n.x * normal_step;","\tc.p2.y = c.p1.y - n.y * normal_step;","\tc.p3.x = c.p1.x + n.y * line_step;","\tc.p3.y = c.p1.y - n.x * line_step;","\tc.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;","\tc.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;","\treturn c;","}","float blendColour( float a, float b, float t ) {","\tif ( blendingMode == BLENDING_LINEAR ) {","\t\treturn blend( a, b, 1.0 - t );","\t} else if ( blendingMode == BLENDING_ADD ) {","\t\treturn blend( a, min( 1.0, a + b ), t );","\t} else if ( blendingMode == BLENDING_MULTIPLY ) {","\t\treturn blend( a, max( 0.0, a * b ), t );","\t} else if ( blendingMode == BLENDING_LIGHTER ) {","\t\treturn blend( a, max( a, b ), t );","\t} else if ( blendingMode == BLENDING_DARKER ) {","\t\treturn blend( a, min( a, b ), t );","\t} else {","\t\treturn blend( a, b, 1.0 - t );","\t}","}","void main() {","\tif ( ! disable ) {","\t\tvec2 p = vec2( vUV.x * width, vUV.y * height );","\t\tvec2 origin = vec2( 0, 0 );","\t\tfloat aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;","\t\tCell cell_r = getReferenceCell( p, origin, rotateR, radius );","\t\tCell cell_g = getReferenceCell( p, origin, rotateG, radius );","\t\tCell cell_b = getReferenceCell( p, origin, rotateB, radius );","\t\tfloat r = getDotColour( cell_r, p, 0, rotateR, aa );","\t\tfloat g = getDotColour( cell_g, p, 1, rotateG, aa );","\t\tfloat b = getDotColour( cell_b, p, 2, rotateB, aa );","\t\tvec4 colour = texture2D( tDiffuse, vUV );","\t\tr = blendColour( r, colour.r, blending );","\t\tg = blendColour( g, colour.g, blending );","\t\tb = blendColour( b, colour.b, blending );","\t\tif ( greyscale ) {","\t\t\tr = g = b = (r + b + g) / 3.0;","\t\t}","\t\tgl_FragColor = vec4( r, g, b, 1.0 );","\t} else {","\t\tgl_FragColor = texture2D( tDiffuse, vUV );","\t}","}"].join("\n")},n=function(e,t,r){for(var n in i.a.call(this),void 0===s&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=a.UniformsUtils.clone(s.uniforms),this.material=new a.ShaderMaterial({uniforms:this.uniforms,fragmentShader:s.fragmentShader,vertexShader:s.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t,r)r.hasOwnProperty(n)&&this.uniforms.hasOwnProperty(n)&&(this.uniforms[n].value=r[n]);this.fsQuad=new i.a.FullScreenQuad(this.material)};n.prototype=Object.assign(Object.create(i.a.prototype),{constructor:n,render:function(e,t,r){this.material.uniforms.tDiffuse.value=r.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))},setSize:function(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}})},65:function(e,t,r){"use strict";r.r(t);var a=r(35),i=r(29),s=r(0),n=r.n(s),o=r(36),l=r(30),c=r(27),f=r(33),d=r(34),h=r(39),u=r(32);function p(){var e=Object(i.a)(["\n    width: 100vw;\n    height: 100vh;\n    z-index: -100;\n    background-color: $black;\n"]);return p=function(){return e},e}Object(o.b)({EffectComposer:d.a,RenderPass:f.a,HalftonePass:h.a});var m=l.a.div(p()),g=function(e){var t=Object(s.useRef)(),r=Object(s.useState)(!1),i=Object(a.a)(r,2),l=i[0],c=i[1];return Object(o.c)((function(){t.current&&(t.current.rotation.x+=.005,t.current.rotation.y+=.01)})),n.a.createElement("mesh",{ref:t,position:e.position,scale:l?[1.5,1.5,1.5]:[1,1,1],onClick:function(e){return c(!l)}},n.a.createElement("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),n.a.createElement("meshNormalMaterial",{attach:"material"}))},_=function(){var e=Object(o.d)(),t=e.gl,r=e.scene,a=e.camera,i=e.size,l=Object(s.useRef)();return r.fog=new c.Fog(0,1,1e3),Object(s.useEffect)((function(){l.current&&l.current.setSize(i.width,i.height)}),[i]),Object(o.c)((function(){l.current&&l.current.render()}),10),n.a.createElement(n.a.Fragment,null,n.a.createElement("effectComposer",{ref:l,args:[t]},n.a.createElement("renderPass",{attachArray:"passes",args:[r,a]}),n.a.createElement("halftonePass",{attachArray:"passes"})))},v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ambientLight",null),n.a.createElement(g,{position:[0,0,0]}),n.a.createElement(_,null))};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{title:"Halftone Box"}),n.a.createElement(m,null,n.a.createElement(o.a,null,n.a.createElement(v,null))))}}}]);
//# sourceMappingURL=6.e4ed437d.chunk.js.map