<!-- Hero -->
<div align="center">
  <h1>Icofy 🚀</h1>
  <p><strong>A CLI tool to generate stunning mobile app icons for iOS and Android in seconds!</strong></p>

  <!-- Badges -->
  <p>
    <a href="#"><img alt="npm" src="https://img.shields.io/badge/cli-icofy-7c5cff?logo=gnometerminal"></a>
    <a href="#"><img alt="license" src="https://img.shields.io/badge/license-MIT-0ea5e9"></a>
    <a href="#"><img alt="platforms" src="https://img.shields.io/badge/platforms-iOS%20%7C%20Android-10b981"></a>
    <a href="#"><img alt="made with love" src="https://img.shields.io/badge/made%20with-♥-ef4444"></a>
  </p>

  <!-- Quick CTA -->
  <p>
    <a href="#-cli-commands" style="text-decoration:none;">
      <img alt="Usage" src="https://img.shields.io/badge/Usage-icofy%20generate-1f2937">
    </a>
  </p>
</div>

---

<!-- Why -->
<div align="center">
  <h2>✨ Why Icofy?</h2>
  <p>Create <strong>beautiful, professional, and modern app icons</strong> without spending hours in design tools.<br/>
  Perfect for developers, designers, and indie makers who want <strong>eye-catching icons instantly</strong>.</p>
</div>

---

<!-- Features -->
<h2>🔥 Features</h2>

<ul>
  <li>Generate <strong>polished, high-quality app icons</strong> for iOS &amp; Android</li>
  <li>Powered by <a href="https://clipdrop.co/apis/docs/text-to-image" target="_blank"><strong>Clipdrop Text-to-Image API</strong></a></li>
  <li>Support for <strong>custom prompts</strong> – bring your app idea to life</li>
  <li>Secure API key management with <code>icofy auth</code></li>
  <li>Fun and interactive CLI experience</li>
  <li>Super <strong>fast &amp; simple</strong> – just one command!</li>
</ul>

---

<!-- API -->
<h2>🔑 API Key Setup</h2>

<p>
Icofy uses the <a href="https://clipdrop.co/apis/docs/text-to-image" target="_blank">Clipdrop Text-to-Image API</a> under the hood.
You need an API key from Clipdrop to use Icofy:
</p>

<ol>
  <li>Go to <a href="https://clipdrop.co/apis" target="_blank"><strong>Clipdrop API Dashboard</strong></a></li>
  <li>Create an account or log in</li>
  <li>Copy your API key</li>
  <li>Run <code>icofy auth</code> and paste the key</li>
</ol>

---

<!-- Previews -->
<h2>🎨 Icon Previews</h2>

<p>Here are some examples of what Icofy can generate:</p>

<table>
  <thead>
    <tr>
      <th align="center">Preview</th>
      <th align="center">Preview</th>
      <th align="center">Preview</th>
      <th align="center">Preview</th>
      <th align="center">Preview</th>
      <th align="center">Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="https://raw.githubusercontent.com/rit3zh/icofy/main/icofy/alarm-clock.png" alt="Icon 1" width="120"/></td>
      <td align="center"><img src="https://raw.githubusercontent.com/rit3zh/icofy/main/icofy/food-app.png" alt="Icon 2" width="120"/></td>
      <td align="center"><img src="https://raw.githubusercontent.com/rit3zh/icofy/main/icofy/meditation-app.png" alt="Icon 3" width="120"/></td>
      <td align="center"><img src="https://raw.githubusercontent.com/rit3zh/icofy/main/icofy/social-media-new.png" alt="Icon 4" width="120"/></td>
      <td align="center"><img src="https://raw.githubusercontent.com/rit3zh/icofy/main/icofy/fitness-new.png" alt="Icon 5" width="120"/></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/fb90bd0f-3787-4fae-94b8-4c2f09745da3" alt="Icon 5" width="120"/></td>
    </tr>
  </tbody>
</table>

<!-- Install -->
<h2 id="-installation">📦 Installation</h2>

```bash
# Using npm
npm install -g rn-icofy

# Or using pnpm
pnpm add -g rn-icofy
```

---

<!-- CLI -->

<h2 id="-cli-commands">💻 CLI Commands</h2>

```bash
# 1️⃣ Authenticate (set your API key)
icofy configure

# 2️⃣ Generate a stunning new app icon
icofy generate

# describe your app idea
# Example: Create a modern fitness app icon featuring a sleek abstract dumbbell or a stylized muscular arm inside a rounded square.

# 3️⃣ Show your saved API key
icofy show-key
```

<details>
  <summary><strong>Examples</strong></summary>

```bash
# Minimalist food delivery icon with a bold glyph
icofy generate "Minimal food delivery icon, bold glyph, high contrast, rounded square, iOS style"

# Calm meditation app with dark gradient mesh
icofy generate "Meditation app icon, dark mesh gradient, abstract wave symbol, soft glow"

# Social app, overlapping chat bubbles, subtle depth
icofy generate "Social app icon, overlapping chat shapes, subtle depth, modern"
```

</details>

---

<!-- How it works -->

<h2>⚙️ How It Works</h2>

<ol>
  <li><strong>Authenticate</strong> once with your API key: <code>icofy auth</code></li>
  <li><strong>Describe</strong> your idea in a short prompt</li>
  <li><strong>Generate</strong>: Icofy calls <a href="https://clipdrop.co/apis/docs/text-to-image">Clipdrop API</a> to create platform-ready assets</li>
  <li><strong>Use</strong> the exported icons in your iOS/Android projects</li>
</ol>

---

<!-- Output -->

<h2>📁 Output</h2>

<ul>
  <li>Platform-ready PNGs (iOS &amp; Android)</li>
  <li>Consistent rounded-square canvas suitable for app stores</li>
  <li>Deterministic naming so you can script your pipeline</li>
</ul>

---

<!-- Notes -->

<h2>📌 Notes</h2>

<ul>
  <li>Icofy requires a valid <a href="https://clipdrop.co/apis">Clipdrop API key</a>.</li>
  <li>Generated icons are ready for <strong>iOS and Android</strong> app submission.</li>
</ul>

---

<!-- Footer -->

<p align="center">
  Made with ♥ using <a href="https://clipdrop.co/apis/docs/text-to-image">Clipdrop API</a> — PRs welcome!
</p>
