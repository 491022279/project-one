;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M31.616 199.36c0-33.504 27.168-60.672 60.672-60.672s60.672 27.168 60.672 60.672c0 33.504-27.168 60.672-60.672 60.672s-60.672-27.168-60.672-60.672zM23.936 500.032c0-33.536 27.2-60.736 60.736-60.736s60.736 27.2 60.736 60.736c0 33.536-27.2 60.736-60.736 60.736s-60.736-27.2-60.736-60.736zM23.936 802.24c0-33.536 27.2-60.736 60.736-60.736s60.736 27.2 60.736 60.736c0 33.536-27.2 60.736-60.736 60.736s-60.736-27.2-60.736-60.736zM995.392 196.544c0 32-23.744 57.856-53.12 57.856l-629.76 0c-29.376 0-53.184-25.92-53.184-57.856l0 0c0-31.936 23.744-57.856 53.184-57.856l629.696 0c29.44 0 53.184 25.92 53.184 57.856l0 0zM995.392 497.28c0 31.936-23.744 57.856-53.12 57.856l-629.76 0c-29.376 0-53.184-25.92-53.184-57.856l0 0c0-32 23.744-57.856 53.184-57.856l629.696 0c29.44-0.064 53.184 25.856 53.184 57.856l0 0zM995.392 799.296c0 32-23.744 57.92-53.12 57.92l-629.76 0c-29.376 0-53.184-25.92-53.184-57.92l0 0c0-31.872 23.744-57.792 53.184-57.792l629.696 0c29.44 0 53.184 25.92 53.184 57.792l0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M948.224 894.144l-168.512-167.296c58.24-70.08 93.248-160.064 93.248-258.304 0-223.36-181.056-404.48-404.48-404.48C245.12 64 64 245.184 64 468.544c0 223.488 181.12 404.544 404.48 404.544 97.344 0 186.624-34.432 256.384-91.712l168.32 167.552C900.48 956.224 909.568 960 920.192 960c10.752 0 20.032-3.904 27.648-11.456 7.68-7.616 11.52-16.896 11.52-27.648C959.296 910.4 955.648 901.44 948.224 894.144zM145.344 468.544c0-178.496 144.704-323.2 323.2-323.2 178.496 0 323.2 144.704 323.2 323.2 0 178.56-144.704 323.2-323.2 323.2C290.048 791.744 145.344 647.04 145.344 468.544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)