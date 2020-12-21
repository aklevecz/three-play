uniform sampler2D tex;
uniform bool colored;
uniform float progress;
varying vec2 vUv;
void main() {
    vec4 texture = texture2D(tex ,  vUv);
    float gray = dot(texture.rgb, vec3(0.299, 0.587, 0.114));
    vec4 grayTexture = vec4(vec3(gray), 1.0);
    gl_FragColor = vec4(progress+.2,progress,progress,1.0) * texture;
}
