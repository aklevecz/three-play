#define GATHER_RED_COMPONENT 0;
varying vec2 vUv;
uniform sampler2D text;
uniform sampler2D text2;
void main() {
    vec4 t = texture2D(text, vUv);
    vec4 t2 = texture2D(text2, vUv);

    vec4 tmp = mix(t,t2,1.);
    gl_FragColor = tmp;
}