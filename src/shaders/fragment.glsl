uniform sampler2D pointTexture;
uniform vec3 u_color;
varying vec3 vColor;
varying vec2 vUv;
void main() {
    vec4 texture = texture2D(pointTexture ,  gl_PointCoord);
    gl_FragColor = vec4(vColor,1.0) * vec4(1.0 - texture.r, 1.0 - texture.g, 1.0 - texture.b, 1.0);
    gl_FragColor = texture;
}
