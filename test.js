var disableBodyScroll = function () {
    var a = false,
        o = false,
        i;
    if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    if (!Element.prototype.closest) Element.prototype.closest = function (e) {
        var t = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (t.matches(e)) return t;
            t = t.parentElement
        } while (t !== null);
        return el
    };
    var n = function (e) {
        if (false === o || !e.target.closest(a)) {
            e.preventDefault()
        }
    };
    var s = function (e) {
        if (e.targetTouches.length === 1) {
            i = e.targetTouches[0].clientY
        }
    };
    var r = function (e) {
        if (e.targetTouches.length !== 1) {
            return
        }
        var t = e.targetTouches[0].clientY - i;
        if (o.scrollTop === 0 && t > 0) {
            e.preventDefault()
        }
        if (o.scrollHeight - o.scrollTop <= o.clientHeight && t < 0) {
            e.preventDefault()
        }
    };
    return function (e, t) {
        if (typeof t !== "undefined") {
            a = t;
            o = document.querySelector(t)
        }
        if (true === e) {
            if (false !== o) {
                o.addEventListener("touchstart", s, {
                    passive: false
                });
                o.addEventListener("touchmove", r, {
                    passive: false
                })
            }
            $("body, html").css("overflow", "hidden");
            document.body.addEventListener("touchmove", n, {
                passive: false
            })
        } else {
            if (false !== o) {
                o.removeEventListener("touchstart", s, {
                    passive: false
                });
                o.removeEventListener("touchmove", r, {
                    passive: false
                })
            }
            $("body, html").css("overflow", "");
            document.body.removeEventListener("touchmove", n, {
                passive: false
            })
        }
    }
}();

function GlAnimation(h) {
    var t = h.title;
    var a = 0;
    var o = 0;
    var e, l, i, n, s, r, c, f, d, p, m, u = false,
        g, w, v, b, x, _, y, T, M, k, C, j, E, O, S = 0,
        P = 0,
        H = 30,
        A = window.innerHeight * 1.15,
        D = window.innerWidth,
        L = D / 2,
        I = A / 2,
        V = D / A,
        F = Math.PI,
        R = 0,
        G = 0,
        B = 0,
        Y = 1,
        z = Math.cos,
        W = Math.sin,
        q = new TimelineMax({
            paused: true
        }),
        X = new TimelineMax({
            paused: true
        }),
        N = new TimelineMax({
            paused: true
        }),
        U = new TimelineMax({
            paused: true
        }),
        Z = new TimelineMax({
            paused: true
        }),
        J = new TimelineMax({
            paused: true
        }),
        Q = new TimelineMax({
            paused: true
        }),
        K = new TimelineMax({
            paused: true
        }),
        ee = new TimelineMax({
            paused: true
        }),
        te = new TimelineMax({
            paused: true
        }),
        ae = new THREE.Vector3(0, 0, 0);
    var oe = new THREE.LoadingManager;
    var ie = new THREE.JSONLoader(oe),
        ne = new THREE.TextureLoader(oe),
        se = new TimelineMax({
            paused: true
        }),
        re = new THREE.Clock,
        le = re.getDelta(),
        x = new THREE.Object3D;
    var ce = h.mouseInfluence,
        fe = 0,
        de = 0,
        pe = 100,
        ue = 5,
        H = 30;
    var he = "/../public/imgs/studio_1/",
        me = "/../public/imgs/studio_2/";
    var ge = ne.load("/../public/obj/tex/lightMap.jpg");
    var we = function () {
        var e = (new THREE.Box3).setFromObject(x);
        var t = e.getSize(ae);
        if (D <= h.desktopMaxWidth) {
            var a = h.objsGroup_ScaleDesktop;
            x.scale.set(a, a, a);
            x.position.set(h.objGroupX_desktop, h.objGroupY_desktop, h.objGroupZ_desktop);
            if (typeof y !== "undefined") {
                y.scale.set(h.objText_ScaleDesktop, h.objText_ScaleDesktop, h.objText_ScaleDesktop)
            }
            if (typeof m !== "undefined") {
                m.scale.set(h.objLetter_ScaleDesktop, h.objLetter_ScaleDesktop, h.objLetter_ScaleDesktop)
            }
            if (typeof objExtra1 !== "undefined") {
                objExtra1.scale.set(h.objExtra1_ScaleDesktop, h.objExtra1_ScaleDesktop, h.objExtra1_ScaleDesktop)
            }
            if (typeof objExtra2 !== "undefined") {
                objExtra2.scale.set(h.objExtra2_ScaleDesktop, h.objExtra2_ScaleDesktop, h.objExtra2_ScaleDesktop);
                objExtra2.position.set(0, h.objExtra2_Y_ScaleDesktop, 0)
            }
        } else if (D <= h.desktopMaxMaxWidth) {
            var a = h.objsGroup_ScaleMaxDesktop;
            x.scale.set(a, a, a);
            x.position.set(h.objGroupX_MaxDesktop, h.objGroupY_MaxDesktop, h.objGroupZ_MaxDesktop);
            if (typeof y !== "undefined") {
                y.scale.set(h.objText_ScaleMaxDesktop, h.objText_ScaleMaxDesktop, h.objText_ScaleMaxDesktop)
            }
            if (typeof m !== "undefined") {
                m.scale.set(h.objLetter_ScaleMaxDesktop, h.objLetter_ScaleMaxDesktop, h.objLetter_ScaleMaxDesktop)
            }
            if (typeof objExtra1 !== "undefined") {
                objExtra1.scale.set(h.objExtra1_ScaleMaxDesktop, h.objExtra1_ScaleMaxDesktop, h.objExtra1_ScaleMaxDesktop)
            }
            if (typeof objExtra2 !== "undefined") {
                objExtra2.scale.set(h.objExtra2_ScaleMaxDesktop, h.objExtra2_ScaleMaxDesktop, h.objExtra2_ScaleMaxDesktop);
                objExtra2.position.set(0, h.objExtra2_Y_ScaleMaxDesktop, 0)
            }
        } else {
            var a = h.objWidthBigDesktop;
            x.scale.set(a, a, a);
            x.position.set(h.objGroupX_bigDesktop, h.objGroupY_bigDesktop, h.objGroupZ_bigDesktop);
            if (typeof y !== "undefined") {
                y.scale.set(h.objText_ScaleBigDesktop, h.objText_ScaleBigDesktop, h.objText_ScaleBigDesktop)
            }
            if (typeof m !== "undefined") {
                m.scale.set(h.objLetter_ScaleBigDesktop, h.objLetter_ScaleBigDesktop, h.objLetter_ScaleBigDesktop)
            }
            if (typeof objExtra1 !== "undefined") {
                objExtra1.scale.set(h.objExtra1_ScaleBigDesktop, h.objExtra1_ScaleBigDesktop, h.objExtra1_ScaleBigDesktop)
            }
            if (typeof objExtra2 !== "undefined") {
                objExtra2.scale.set(h.objExtra2_ScaleBigDesktop, h.objExtra2_ScaleBigDesktop, h.objExtra2_ScaleBigDesktop);
                objExtra2.position.set(0, h.objExtra2_Y_ScaleBigDesktop, 0)
            }
        }
        x.updateMatrix()
    };
    var ve = function () {
        var e = re.getDelta();
        if (w) {
            w.update(e)
        }
        i.lookAt(l.position);
        n.render(l, i);
        at()
    };

    function be(e, t, a) {
        return Number(((e - a) / (t - a)).toFixed(2))
    }

    function xe(e, t, a, o, i) {
        return (a - t) * (e - o) / (i - o) + t
    }

    function _e(e, t, a) {
        return h.aniTime * 1e3 / e * t - a
    }

    function ye(e) {
        return e * F / 180
    }

    function $e(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }
    var Te = he;
    var Me = ".jpg";
    var ke = [Te + "px" + Me, Te + "nx" + Me, Te + "py" + Me, Te + "ny" + Me, Te + "pz" + Me, Te + "nz" + Me];
    var Ce = (new THREE.CubeTextureLoader).load(ke);
    Ce.format = THREE.RGBFormat;
    Ce.mapping = THREE.CubeReflectionMapping;
    var Te = me;
    var Me = ".jpg";
    var ke = [Te + "px" + Me, Te + "nx" + Me, Te + "py" + Me, Te + "ny" + Me, Te + "pz" + Me, Te + "nz" + Me];
    var je = (new THREE.CubeTextureLoader).load(ke);
    je.format = THREE.RGBFormat;
    je.mapping = THREE.CubeReflectionMapping;

    function Ee() {
        switch (t) {
            case "home":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/home.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break;
            case "about":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/about.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break;
            case "contact":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/contact.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break;
            case "jobs":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/jobs.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break;
            case "nearshoring":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/near.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break;
            case "software":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/soft.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break;
            case "outsourcing":
                container = $(".page-header #webGL-container");
                container.append('<div class="webgl-fallback"><img src="/public/obj/imgFallBack/out.png)" alt="Webgl Fallback"></div>');
                TweenMax.fromTo(container, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power1.easeInOut
                });
                break
        }
    }

    function Oe() {
        try {
            var e = document.createElement("canvas");
            return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
        } catch (e) {
            return false
        }
    }

    function Se() {
        var t = document.getElementsByTagName("canvas");
        t[0].addEventListener("webglcontextlost", function (e) {
            e.preventDefault();
            Ee();
            t[0].style.opacity = 0
        }, false)
    }

    function Pe() {
        var o = "image/octet-stream";
        var i = function (e, t) {
            var a = document.createElement("a");
            if (typeof a.download === "string") {
                document.body.appendChild(a);
                a.download = t;
                a.href = e;
                a.click();
                document.body.removeChild(a)
            } else {
                location.replace(uri)
            }
        };

        function e() {
            var e, t;
            try {
                var a = "image/png";
                e = n.domElement.toDataURL(a);
                i(e.replace(a, o), "frame.png")
            } catch (e) {
                return
            }
        }
        document.getElementsByClassName("page-main")[0].addEventListener("click", function () {
            e()
        })
    }

    function He() {
        document.getElementsByClassName("page-main")[0].addEventListener("click", function () {
            if (n) {
                n.forceContextLoss()
            }
        })
    }
    var Ae = function () {
        l = new THREE.Scene;
        i = new THREE.PerspectiveCamera(45, D / A, .1, 1e3);
        n = Oe() ? new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            stencil: false,
            preserveDrawingBuffer: false
        }) : new THREE.CanvasRenderer;
        n.setClearColor(0, 0);
        n.shadowMap.autoUpdate = false;
        n.setSize(D, A);
        var e = 1.75;
        var t = Math.min(e, window.devicePixelRatio);
        n.setPixelRatio(t);
        i.position.x = fe;
        i.position.y = de;
        i.position.z = pe
    };
    var De = function () {
        TweenMax.ticker.addEventListener("tick", ve);
        document.addEventListener("mousemove", tt, false);
        $(window).on("resize.titlesAnimation", function () {
            et()
        })
    };

    function Le(e) {
        function a(e, t) {
            if (t === false) {
                e.wasFrustumCulled = e.frustumCulled;
                e.wasVisible = e.visible;
                e.visible = true;
                e.frustumCulled = false
            } else {
                e.visible = e.wasVisible;
                e.frustumCulled = e.wasFrustumCulled
            }
            e.children.forEach(function (e) {
                a(e, t)
            })
        }
        a(l, false);
        n.render(l, i);
        n.clear();
        a(l, true);
        e()
    }
    var Ie = function (e) {
        switch (t) {
            case "home":
                container = $(".page-header #webGL-container");
                Ae();
                Ve();
                Je();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De()
                    })
                };
                break;
            case "newsletter":
                container = $(".page-footer #webGL-container");
                Ae();
                n.shadowMap.enabled = true;
                n.shadowMap.type = THREE.PCFSoftShadowMap;
                Fe();
                qe();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De()
                    })
                };
                break;
            case "about":
                container = $(".page-header #webGL-container");
                Ae();
                Re();
                Xe();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De()
                    })
                };
                break;
            case "contact":
                container = $(".page-header #webGL-container");
                Ae();
                Ge();
                Ne();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De()
                    })
                };
                break;
            case "jobs":
                container = $(".page-header #webGL-container");
                Ae();
                Be();
                Ue();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De()
                    })
                };
                break;
            case "nearshoring":
                container = $(".page-header #webGL-container");
                Ae();
                Ye();
                $(".webGL-main").addClass("owleyes");
                Ze();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De();
                        ct()
                    })
                };
                break;
            case "software":
                container = $(".page-header #webGL-container");
                Ae();
                ze();
                Qe();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De();
                        ft()
                    })
                };
                break;
            case "outsourcing":
                container = $(".page-header #webGL-container");
                Ae();
                We();
                Ke();
                container.append(n.domElement);
                oe.onLoad = function () {
                    Le(function () {
                        De();
                        dt()
                    })
                };
                break
        }
        if (typeof e == "function") e();
        Se()
    };

    function Ve() {
        ie.load("/../public/obj/objHome.json", function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 16777215,
                envMap: je,
                envMapIntensity: .55,
                emissive: 16777215,
                emissiveIntensity: .74,
                roughness: .68,
                metalness: .91,
                transparent: true,
                opacity: 0,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, 0);
            we();
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m);
            q.fromTo(m.position, h.aniTimeLoop, {
                y: 2
            }, {
                y: 3,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            });
            q.play();
            TweenMax.fromTo(m.material, h.aniTimeFadeIn, {
                opacity: 0
            }, {
                opacity: .95,
                ease: Power1.easeOut
            }, 0);
            TweenMax.fromTo(m.position, h.aniTimeFadeIn, {
                z: 0
            }, {
                z: 35,
                ease: Power1.easeOut
            }, 0)
        });
        l.add(x)
    }

    function Fe() {
        var e = "/../public/obj/objNewsletter.json";
        x = new THREE.Object3D;
        ie.load(e, function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 16777215,
                lightMap: ge,
                envMap: Ce,
                envMapIntensity: 1,
                ligthMapIntensity: 1,
                envMapIntensity: 1,
                roughness: .7,
                opacity: .9,
                transparent: true,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            objNew = new THREE.Mesh(e, t);
            objNew.castShadow = true;
            objNew.scale.set(13, 13, 13);
            objNew.rotation.set(0, 0, 0);
            objNew.position.set(0, 0, 0);
            w = new THREE.AnimationMixer(objNew);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", objNew.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(objNew);
            we();
            n.render(l, i)
        });
        var t = new THREE.ShadowMaterial;
        t.opacity = .08;
        b = new THREE.Mesh(new THREE.PlaneGeometry(2e3, 2e3), t);
        var a = .25;
        b.scale.set(a, a, a);
        b.receiveShadow = true;
        b.rotation.set(-20, 0, 0);
        b.position.set(0, -20, 35);
        x.add(b);
        l.add(x);
        n.render(l, i)
    }

    function Re() {
        ie.load("/../public/obj/objAbout.json", function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 8740564,
                envMap: Ce,
                envMapIntensity: 1,
                emissive: 8740564,
                emissiveIntensity: .85,
                roughness: .54,
                metalness: 1,
                transparent: true,
                opacity: 0,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, 0);
            we();
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m);
            we();
            l.add(x);
            q.fromTo(m.position, h.aniTimeLoop, {
                y: 2
            }, {
                y: 3,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            });
            q.play();
            TweenMax.fromTo(m.material, h.aniTimeFadeIn, {
                opacity: 0
            }, {
                opacity: .95,
                ease: Power1.easeOut
            }, 0);
            TweenMax.fromTo(m.position, h.aniTimeFadeIn, {
                z: 0
            }, {
                z: 35,
                ease: Power1.easeOut
            }, 0)
        })
    }

    function Ge() {
        ie.load("/../public/obj/objContact.json", function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 16215662,
                envMap: Ce,
                envMapIntensity: 1,
                emissive: 16215662,
                emissiveIntensity: .83,
                roughness: .54,
                metalness: 1,
                transparent: true,
                opacity: 0,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.scale.set(1, 1, 1);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, 0);
            m.matrixAutoUpdate = true;
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m);
            we();
            q.fromTo(m.position, h.aniTimeLoop, {
                y: 2
            }, {
                y: 3,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            });
            q.play();
            TweenMax.fromTo(m.material, h.aniTimeFadeIn, {
                opacity: 0
            }, {
                opacity: .95,
                ease: Power1.easeOut
            }, 0);
            TweenMax.fromTo(m.position, h.aniTimeFadeIn, {
                z: 0
            }, {
                z: 35,
                ease: Power1.easeOut
            }, 0)
        });
        l.add(x)
    }

    function Be() {
        ie.load("/../public/obj/obJobs.json", function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 1880203,
                envMap: Ce,
                envMapIntensity: .6,
                emissive: 1880203,
                emissiveIntensity: 1,
                roughness: .59,
                metalness: 1,
                transparent: true,
                opacity: 0,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.scale.set(1, 1, 1);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, 0);
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m);
            we();
            q.fromTo(m.position, h.aniTimeLoop, {
                y: 2
            }, {
                y: 3,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            });
            q.play();
            TweenMax.fromTo(m.material, h.aniTimeFadeIn, {
                opacity: 0
            }, {
                opacity: .95,
                ease: Power1.easeOut
            }, 0);
            TweenMax.fromTo(m.position, h.aniTimeFadeIn, {
                z: 0
            }, {
                z: 35,
                ease: Power1.easeOut
            }, 0)
        });
        l.add(x)
    }

    function Ye() {
        var e = "/../public/obj/objNear.json",
            t = "/../public/obj/text.json",
            a = "/../public/obj/owl.json";
        var o = ne.load("/../public/obj/tex/colorMapOwl.jpg"),
            i = ne.load("/../public/obj/tex/lightMapOwl.jpg"),
            n = ne.load("/../public/obj/tex/transMapOwl.jpg"),
            s = ne.load("/../public/obj/tex/colorMapTrunk.jpg"),
            r = ne.load("/../public/obj/tex/transMapTrunk.jpg");
        ie.load(t, function (e, t) {
            objTextMaterial = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 0,
                transparent: true,
                opacity: .85,
                opacity: 0
            });
            y = new THREE.SkinnedMesh(e, objTextMaterial);
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            y.rotation.set(0, 0, 0);
            y.position.set(0, 0, 0);
            we();
            x.add(y);
            y.skeleton.bones[0].rotation.x = 0;
            typeMovement = 10;
            var a = [y.skeleton.bones[1].position, y.skeleton.bones[2].position, y.skeleton.bones[3].position, y.skeleton.bones[4].position, y.skeleton.bones[5].position, y.skeleton.bones[6].position, y.skeleton.bones[7].position, y.skeleton.bones[8].position, y.skeleton.bones[9].position];
            Q.fromTo(y.position, h.aniTimeLoop * .25, {
                y: -3
            }, {
                y: 4.5,
                ease: Power1.easeOut
            }, "start -= 0").fromTo(y.material, h.aniTimeLoop * .1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power1.easeOut,
                onComplete: function () {
                    N.play()
                }
            }, "start -= 0").staggerTo(a, h.aniTimeLoop, {
                y: .18,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            }, .5, "loop -= 6")
        });
        ie.load(e, function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 27900,
                envMap: Ce,
                envMapIntensity: 1,
                emissive: 27900,
                emissiveIntensity: .83,
                roughness: .54,
                metalness: 1,
                transparent: true,
                opacity: 0,
                depthWrite: false,
                depthTest: false,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, -5);
            we();
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m)
        });
        ie.load(a, function (e, t) {
            objExtra1Material = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 16777215,
                map: o,
                alphaMap: n,
                lightMap: i,
                lightMapIntensity: 1,
                depthWrite: false,
                depthTest: false,
                transparent: true,
                opacity: 0
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            objExtra1 = new THREE.SkinnedMesh(e, objExtra1Material);
            objExtra1.rotation.set(0, 0, 0);
            objExtra1.position.set(0, -3, 30);
            we();
            x.add(objExtra1)
        });
        trunkMaterial = new THREE.MeshBasicMaterial({
            color: 16777215,
            map: s,
            alphaMap: r,
            lightMap: i,
            lightMapIntensity: 1,
            depthWrite: false,
            depthTest: false,
            transparent: true,
            opacity: 0
        });
        objExtra2 = new THREE.Mesh(new THREE.PlaneGeometry(820, 820), trunkMaterial);
        objExtra2.rotation.set(0, 0, 0);
        objExtra2.position.set(-2, 0, 0);
        we();
        x.add(objExtra2);
        l.add(x)
    }

    function ze() {
        var e = "/../public/obj/leftHand.json",
            t = "/../public/obj/textSoft.json",
            a = "/../public/obj/objSoft.json";
        var o = ne.load("/../public/obj/tex/colorMapLeftHand.jpg"),
            i = ne.load("/../public/obj/tex/transMapLeftHand.jpg"),
            n = ne.load("/../public/obj/tex/lightMapHand.jpg");
        ie.load(t, function (e, t) {
            objTextMaterial = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 0,
                transparent: true,
                opacity: .85,
                transparent: true,
                opacity: 0
            });
            y = new THREE.SkinnedMesh(e, objTextMaterial);
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            y.rotation.set(0, 0, 0);
            y.position.set(0, -3, 55);
            we();
            x.add(y);
            y.skeleton.bones[0].rotation.x = 0;
            typeMovement = 10;
            var a = [y.skeleton.bones[1].position, y.skeleton.bones[2].position, y.skeleton.bones[3].position, y.skeleton.bones[4].position, y.skeleton.bones[5].position, y.skeleton.bones[6].position, y.skeleton.bones[7].position, y.skeleton.bones[8].position];
            Q.fromTo(y.position, h.aniTimeLoop * .25, {
                y: -3
            }, {
                y: 0,
                ease: Power1.easeOut
            }, "start -= 0").fromTo(y.material, h.aniTimeLoop * .1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power1.easeOut,
                onComplete: function () {
                    N.play()
                }
            }, "start -= 0").staggerTo(a, h.aniTimeLoop, {
                y: .18,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            }, .5, "loop -= 6")
        });
        ie.load(a, function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 27900,
                envMap: Ce,
                envMapIntensity: 1,
                emissive: 27900,
                emissiveIntensity: .83,
                roughness: .54,
                metalness: 1,
                transparent: true,
                depthWrite: false,
                depthTest: false,
                opacity: 0,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, 0);
            we();
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m)
        });
        var s = new THREE.Object3D;
        ie.load(e, function (e, t) {
            objLeftHandMaterial = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 16777215,
                map: o,
                alphaMap: i,
                lightMap: n,
                lightMapIntensity: 1,
                depthWrite: false,
                depthTest: false,
                transparent: true,
                opacity: 0
            });
            objLeftHand = new THREE.SkinnedMesh(e, objLeftHandMaterial);
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            objLeftHand.rotation.set(0, 0, 0);
            objLeftHand.position.set(16, -2, 40);
            objLeftHand.scale.set(2.2, 2.2, 2.2);
            s.add(objLeftHand)
        });
        ie.load(e, function (e, t) {
            objRightHandMaterial = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 16777215,
                map: o,
                alphaMap: i,
                lightMap: n,
                lightMapIntensity: 1,
                depthWrite: false,
                depthTest: false,
                transparent: true,
                opacity: 0
            });
            objRightHand = new THREE.SkinnedMesh(e, objRightHandMaterial);
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            objRightHand.rotation.set(0, 0, 0);
            objRightHand.position.set(-16, -2, 40);
            objRightHand.scale.set(-2.2, 2.2, 2.2);
            s.add(objRightHand)
        });
        x.add(s);
        we();
        l.add(x)
    }

    function We() {
        var e = "/../public/obj/objOut.json",
            t = "/../public/obj/textOut.json",
            a = "/../public/obj/suri.json";
        var o = ne.load("/../public/obj/tex/lightMapsuri.jpg"),
            i = ne.load("/../public/obj/tex/colorMapSuri.jpg"),
            n = ne.load("/../public/obj/tex/transMapSuri.jpg");
        ie.load(t, function (e, t) {
            objTextMaterial = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 0,
                transparent: true,
                opacity: .85,
                opacity: 0
            });
            y = new THREE.SkinnedMesh(e, objTextMaterial);
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            y.rotation.set(0, 0, 0);
            y.position.set(0, 1, 0);
            we();
            l.add(y);
            y.skeleton.bones[0].rotation.x = 0;
            typeMovement = 10;
            var a = [y.skeleton.bones[1].position, y.skeleton.bones[2].position, y.skeleton.bones[3].position, y.skeleton.bones[4].position, y.skeleton.bones[5].position, y.skeleton.bones[6].position, y.skeleton.bones[7].position, y.skeleton.bones[8].position, y.skeleton.bones[9].position, y.skeleton.bones[10].position, y.skeleton.bones[11].position];
            Q.fromTo(y.position, h.aniTimeLoop * .25, {
                y: -3
            }, {
                y: 4.5,
                ease: Power1.easeOut
            }, "start -= 0").fromTo(y.material, h.aniTimeLoop * .1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power1.easeOut,
                onComplete: function () {
                    U.play();
                    N.play()
                }
            }, "start -= 0").staggerTo(a, h.aniTimeLoop, {
                y: .18,
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true
            }, .5, "loop -= 6")
        });
        ie.load(e, function (e, t) {
            t = new THREE.MeshStandardMaterial({
                color: 27900,
                envMap: Ce,
                envMapIntensity: 1,
                emissive: 27900,
                emissiveIntensity: .83,
                roughness: .54,
                metalness: 1,
                transparent: true,
                depthWrite: false,
                depthTest: false,
                opacity: 0,
                morphTargets: true
            });
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            m = new THREE.Mesh(e, t);
            m.rotation.set(0, 0, 0);
            m.position.set(0, 0, 0);
            we();
            w = new THREE.AnimationMixer(m);
            v = THREE.AnimationClip.CreateFromMorphTargetSequence("letterMorph", m.geometry.morphTargets, 1, true);
            var a = w.clipAction(v);
            a.loop = THREE.LoopOnce;
            a.setDuration(h.aniTime).play();
            a.paused = true;
            x.add(m)
        });
        ie.load(a, function (e, t) {
            objExtra1 = new THREE.MeshBasicMaterial({
                skinning: true,
                color: 16777215,
                map: i,
                alphaMap: n,
                lightMap: o,
                lightMapIntensity: 1,
                depthWrite: false,
                depthTest: false,
                transparent: true
            });
            objExtra1.opacity = 0;
            objExtra1 = new THREE.SkinnedMesh(e, objExtra1);
            e.faceVertexUvs[1] = e.faceVertexUvs[0];
            objExtra1.rotation.set(0, 0, 0);
            objExtra1.position.set(-6, 0, 37);
            we();
            x.add(objExtra1)
        });
        we();
        l.add(x)
    }

    function qe() {
        var e = 16777215,
            t = 1.3;
        r = new THREE.SpotLight(e, t);
        r.position.set(0, 80 * 5, 40 * 5);
        r.penumbra = 1;
        r.decay = 30;
        r.distance = 4e3;
        r.castShadow = true;
        r.shadow.mapSize.width = 1024;
        r.shadow.mapSize.height = 1024;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, 10077183);
        s.intensity = .75;
        l.add(s);
        n.render(l, i)
    }

    function Xe() {
        var e = 16777215,
            t = 4;
        r = new THREE.SpotLight(e, t);
        r.position.set(20, 80 * 5, 50 * 5);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = true;
        r.shadow.mapSize.width = 1024;
        r.shadow.mapSize.height = 1024;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        spotLight_3 = new THREE.SpotLight(e, t);
        spotLight_3.position.set(-20, 20, 70 * 2);
        spotLight_3.penumbra = 1;
        spotLight_3.decay = 100;
        spotLight_3.distance = 4e3;
        spotLight_3.castShadow = false;
        spotLight_3.shadow.camera.near = 10;
        spotLight_3.shadow.camera.far = 200;
        spotLight_3.lookAt(l.position);
        l.add(spotLight_3);
        s = new THREE.HemisphereLight(e, 1245497);
        s.intensity = 1;
        l.add(s)
    }

    function Ne() {
        var e = 16777215,
            t = 3;
        r = new THREE.SpotLight(e, t);
        r.position.set(30, 40, 60 * 2);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = false;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, 16215662);
        s.intensity = 1;
        l.add(s)
    }

    function Ue() {
        var e = 16777215,
            t = 2.8;
        r = new THREE.SpotLight(e, t);
        r.position.set(30, 40, 60 * 2);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = false;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, 2082717);
        s.intensity = 3;
        l.add(s)
    }

    function Ze() {
        var e = 16777215,
            t = 4;
        r = new THREE.SpotLight(e, t);
        r.position.set(30, 40, 70 * 2);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = false;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, 15135231);
        s.intensity = 1;
        l.add(s)
    }

    function Je() {
        var e = 16777215,
            t = 1.5;
        r = new THREE.SpotLight(e, t);
        r.position.set(35, 25, 100 * 2);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = false;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, 15135231);
        s.intensity = .95;
        l.add(s)
    }

    function Qe() {
        var e = 16777215,
            t = 5;
        r = new THREE.SpotLight(e, t);
        r.position.set(60, 30, 90 * 2);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = false;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, e);
        s.intensity = 1.2;
        l.add(s)
    }

    function Ke() {
        var e = 16777215,
            t = 6;
        r = new THREE.SpotLight(e, t);
        r.position.set(60, 30, 90 * 2);
        r.penumbra = 1;
        r.decay = 100;
        r.distance = 4e3;
        r.castShadow = false;
        r.shadow.camera.near = 10;
        r.shadow.camera.far = 200;
        r.lookAt(l.position);
        l.add(r);
        s = new THREE.HemisphereLight(e, e);
        s.intensity = 1.5;
        l.add(s)
    }

    function et() {
        A = window.innerHeight * 1.15;
        D = window.innerWidth;
        we();
        n.setSize(D, A);
        i.aspect = D / A;
        i.updateProjectionMatrix()
    }

    function tt(e) {
        a = e.clientX - L;
        o = I - e.clientY;
        S = (e.clientX - L) * (ce / 100);
        P = (e.clientY - I * .5) * (ce / 100)
    }

    function at() {
        TweenMax.to(i.position, 10, {
            x: S - i.position.x,
            y: -P - i.position.y,
            ease: Expo.easeOut
        });
        if ($(".webGL-main").hasClass("owleyes")) {
            TweenMax.to(objExtra1.skeleton.bones[11].position, .08, {
                x: xe(a, -.2585, -.2285, -L, L),
                y: xe(o, .145, .165, -I, I),
                ease: Power4.easeOut
            });
            TweenMax.to(objExtra1.skeleton.bones[12].position, .08, {
                x: xe(a, .2285, .2585, -L, L),
                y: xe(o, .145, .165, -I, I),
                ease: Power4.easeOut
            })
        }
    }
    var ot = function () {
        var e = w.clipAction(v);
        e.paused = false;
        q.pause();
        N.to(m.rotation, h.aniTime, {
            y: ye(95),
            ease: Power2.easeInOut
        }).to(m.rotation, h.aniTime * 1.15, {
            y: ye(85),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .9, {
            y: ye(90),
            ease: Power2.easeInOut,
            onComplete: function () {
                q.resume()
            }
        });
        N.play()
    };
    var it = function () {
        var e = w.clipAction(v);
        e.paused = false;
        q.pause();
        N.to(m.rotation, h.aniTime, {
            y: ye(120),
            ease: Power1.easeOut
        }).to(m.rotation, h.aniTime * .7, {
            y: ye(75),
            ease: Power1.easeOut
        }).to(m.rotation, h.aniTime * .9, {
            y: ye(90),
            ease: Power2.easeOut,
            onComplete: function () {
                q.resume()
            }
        });
        N.play()
    };
    var nt = function () {
        var e = w.clipAction(v);
        e.paused = false;
        TweenMax.to(m.material, h.aniTime, {
            envMapIntensity: .7
        });
        N.to(m.rotation, h.aniTime, {
            y: ye(120),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .7, {
            y: ye(75),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .9, {
            y: ye(90),
            ease: Power2.easeOInut,
            onComplete: function () {
                q.resume()
            }
        });
        N.play()
    };
    var st = function () {
        var e = w.clipAction(v);
        e.paused = false;
        q.pause();
        N.to(m.rotation, h.aniTime, {
            x: ye(10),
            y: ye(5),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .6, {
            x: ye(-10),
            y: ye(-5),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .7, {
            x: ye(0),
            y: ye(0),
            ease: Power2.easeInOut,
            onComplete: function () {
                q.resume()
            }
        });
        N.play()
    };
    var rt = function () {
        De();
        q.fromTo(objNew.position, h.aniTimeLoop, {
            x: -.7,
            y: 0
        }, {
            x: .7,
            y: 3,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo(objNew.material, .4, {
            opacity: 0
        }, {
            opacity: .95,
            ease: Power1.easeInOut
        }, 0);
        TweenMax.fromTo(objNew.position, .4, {
            z: 0
        }, {
            z: 35,
            ease: Power1.easeInOut
        }, 0)
    };
    var lt = function () {
        var e = w.clipAction(v);
        e.paused = false;
        N.to(objNew.rotation, h.aniTime * .5, {
            x: ye(6),
            y: ye(5),
            ease: Power1.easeInOut
        }).to(objNew.rotation, h.aniTime * .5, {
            x: ye(-4),
            y: ye(-5),
            ease: Power1.easeInOut
        }).to(objNew.rotation, h.aniTime * .6, {
            x: ye(0),
            y: ye(0),
            ease: Power1.easeInOut
        });
        N.play();
        setTimeout(function () {
            e.paused = true;
            objNew.material.needsUpdate = true
        }, h.aniTime / 2 * 1e3)
    };
    var ct = function () {
        R += .002;
        var e = 5;
        objExtra1.skeleton.bones[0].rotation.x = 0;
        wingAngle = 10;
        var t = [objExtra1.skeleton.bones[1].rotation, objExtra1.skeleton.bones[2].rotation, objExtra1.skeleton.bones[3].rotation, objExtra1.skeleton.bones[4].rotation];
        var a = [objExtra1.skeleton.bones[5].rotation, objExtra1.skeleton.bones[6].rotation, objExtra1.skeleton.bones[7].rotation, objExtra1.skeleton.bones[8].rotation];
        var o = w.clipAction(v);
        q.fromTo(m.position, h.aniTimeLoop, {
            y: 2
        }, {
            y: 3,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        });
        N.fromTo(m.material, h.aniTimeFadeIn * .2, {
            opacity: 0
        }, {
            opacity: .95,
            ease: Power1.easeOut
        }, "nStart -= 0").fromTo(m.position, h.aniTimeFadeIn, {
            z: 0
        }, {
            z: 33,
            ease: Power1.easeOut,
            onComplete: function () {
                o.paused = false
            }
        }, "nStart -= 0").to(m.rotation, h.aniTime, {
            y: ye(95),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .8, {
            y: ye(85),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .9, {
            y: ye(90),
            ease: Power2.easeInOut,
            onComplete: function () {
                q.play()
            }
        }).to(objExtra2.material, h.aniTime * .9, {
            opacity: 1,
            ease: Power2.easeOut
        }, "owl-=2.5").to(objExtra1.material, h.aniTime * .9, {
            opacity: 1,
            ease: Power2.easeOut
        }, "owl-=2.5").to(objExtra1.position, h.aniTime * 1.5, {
            y: 0,
            z: 65,
            ease: Power2.easeOut
        }, "owl-=2.5").staggerFromTo(a, 1, {
            z: -ye(15),
            ease: Power1.easeOut
        }, {
            z: ye(15),
            ease: Power1.easeOut
        }, .2, "wing-=2.5").staggerFromTo(t, 1, {
            z: ye(15),
            ease: Power1.easeOut
        }, {
            z: -ye(15),
            ease: Power1.easeOut
        }, .2, "wing-=2.5").to(objExtra1.position, h.owlAniTime, {
            y: -1.5,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, "wingloop-=1.3").staggerTo(a, h.owlAniTime, {
            y: ye(5),
            z: ye(0),
            ease: Power2.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(t, h.owlAniTime, {
            y: -ye(5),
            z: -ye(0),
            ease: Power2.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").fromTo(objExtra1.skeleton.bones[9].rotation, h.owlAniTime, {
            x: -ye(20),
            z: ye(5)
        }, {
            x: -ye(35),
            z: -ye(5),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").fromTo(objExtra1.skeleton.bones[10].rotation, h.owlAniTime, {
            x: -ye(20),
            z: ye(5)
        }, {
            x: -ye(35),
            z: -ye(5),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5");
        Q.play()
    };
    var ft = function () {
        R += .002;
        var e = 5;
        objLeftHand.skeleton.bones[0].rotation.x = 0;
        objRightHand.skeleton.bones[0].rotation.x = 0;
        wingAngle = 10;
        var t = [objLeftHand.skeleton.bones[4].rotation, objLeftHand.skeleton.bones[5].rotation];
        var a = [objLeftHand.skeleton.bones[6].rotation, objLeftHand.skeleton.bones[7].rotation, objLeftHand.skeleton.bones[8].rotation];
        var o = [objLeftHand.skeleton.bones[9].rotation, objLeftHand.skeleton.bones[10].rotation, objLeftHand.skeleton.bones[11].rotation];
        var i = [objLeftHand.skeleton.bones[12].rotation, objLeftHand.skeleton.bones[13].rotation, objLeftHand.skeleton.bones[14].rotation];
        var n = [objLeftHand.skeleton.bones[15].rotation, objLeftHand.skeleton.bones[16].rotation, objLeftHand.skeleton.bones[17].rotation];
        var s = [objLeftHand.skeleton.bones[1].rotation, objLeftHand.skeleton.bones[2].rotation, objLeftHand.skeleton.bones[3].rotation];
        var r = [objRightHand.skeleton.bones[4].rotation, objRightHand.skeleton.bones[5].rotation];
        var l = [objRightHand.skeleton.bones[6].rotation, objRightHand.skeleton.bones[7].rotation, objRightHand.skeleton.bones[8].rotation];
        var c = [objRightHand.skeleton.bones[9].rotation, objRightHand.skeleton.bones[10].rotation, objRightHand.skeleton.bones[11].rotation];
        var f = [objRightHand.skeleton.bones[12].rotation, objRightHand.skeleton.bones[13].rotation, objRightHand.skeleton.bones[14].rotation];
        var d = [objRightHand.skeleton.bones[15].rotation, objRightHand.skeleton.bones[16].rotation, objRightHand.skeleton.bones[17].rotation];
        var p = [objRightHand.skeleton.bones[1].rotation, objRightHand.skeleton.bones[2].rotation, objRightHand.skeleton.bones[3].rotation];
        var u = w.clipAction(v);
        q.fromTo(m.position, h.aniTimeLoop, {
            y: 2
        }, {
            y: 3,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        });
        N.fromTo(m.material, h.aniTimeFadeIn * .2, {
            opacity: 0
        }, {
            opacity: .95,
            ease: Power1.easeOut
        }, "nStart -= 0").fromTo(m.position, h.aniTimeFadeIn, {
            z: 0
        }, {
            z: 33,
            ease: Power1.easeOut,
            onComplete: function () {
                var e = w.clipAction(v);
                e.paused = false
            }
        }, "nStart -= 0").to(m.rotation, h.aniTime, {
            y: ye(95),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .8, {
            y: ye(85),
            ease: Power1.easeInOut
        }).to(m.rotation, h.aniTime * .9, {
            y: ye(90),
            ease: Power2.easeInOut,
            onComplete: function () {
                q.play()
            }
        }).to(objLeftHand.material, h.aniTime * .9, {
            opacity: 1,
            ease: Power2.easeOut
        }, "owl-=2.5").to(objRightHand.material, h.aniTime * .9, {
            opacity: 1,
            ease: Power2.easeOut
        }, "owl-=2.5").to(objLeftHand.position, h.aniTime * 1.5, {
            y: 0,
            x: 12,
            z: 45,
            ease: Power2.easeOut
        }, "owl-=2.5").to(objRightHand.position, h.aniTime * 1.5, {
            y: 0,
            x: -12,
            z: 45,
            ease: Power2.easeOut
        }, "owl-=2.5").to(objLeftHand.position, h.extra1Animation, {
            y: 2,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, "wingloop-=1.3").to(objRightHand.position, h.extra1Animation, {
            y: 2,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, "wingloop-=1.3").staggerTo(t, h.extra1Animation, {
            x: ye(2),
            z: -ye(2),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(r, h.extra1Animation, {
            x: ye(2),
            z: -ye(2),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(a, h.extra1Animation, {
            x: ye(6.5),
            z: -ye(3),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(l, h.extra1Animation, {
            x: ye(6.5),
            z: -ye(3),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(o, h.extra1Animation, {
            x: ye(6.5),
            z: -ye(4),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(c, h.extra1Animation, {
            x: ye(6.5),
            z: -ye(4),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(i, h.extra1Animation, {
            x: ye(6.5),
            z: -ye(4),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(f, h.extra1Animation, {
            x: ye(6.5),
            z: -ye(4),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(n, h.extra1Animation, {
            x: ye(6),
            z: -ye(3),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(d, h.extra1Animation, {
            x: ye(6),
            z: -ye(3),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(s, h.extra1Animation, {
            x: -ye(5),
            z: ye(2),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5").staggerTo(p, h.extra1Animation, {
            x: -ye(5),
            z: ye(2),
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        }, .2, "wingloop-=1.5");
        Q.play()
    };
    var dt = function () {
        R += .002;
        var e = 5;
        objExtra1.skeleton.bones[0].rotation.x = 0;
        wingAngle = 10;
        var a = [objExtra1.skeleton.bones[1].rotation, objExtra1.skeleton.bones[2].rotation, objExtra1.skeleton.bones[3].rotation];
        var o = [objExtra1.skeleton.bones[5].rotation];
        var t = [objExtra1.skeleton.bones[6].position];
        var i = [objExtra1.skeleton.bones[4].scale];
        var n = [objExtra1.skeleton.bones[7].rotation, objExtra1.skeleton.bones[8].rotation];
        var s = [objExtra1.skeleton.bones[10].rotation];

        function r() {
            var e = $e(-2.5, 2.5);
            var t = $e(2, 4);
            TweenMax.staggerTo(a, t, {
                z: ye(e),
                y: ye(e * 1.2),
                ease: Power4.easeInOut
            }, .01, function () {
                r()
            });
            TweenMax.to(o, t, {
                z: ye(e),
                y: ye(e * 1.2),
                ease: Power4.easeInOut
            });
            TweenMax.to(objExtra1.skeleton.bones[6].position, t, {
                x: e * .1,
                ease: Power4.easeInOut
            })
        }

        function l() {
            var e = $e(-2, 2);
            var t = $e(1, 2);
            TweenMax.staggerTo(n, t, {
                z: ye(e),
                y: ye(e * 1.2),
                ease: Power4.easeInOut
            }, .01, function () {
                l()
            });
            TweenMax.to(objExtra1.skeleton.bones[10].position, t, {
                x: e * .05,
                ease: Power4.easeInOut
            })
        }
        q.fromTo(m.position, h.aniTimeLoop, {
            y: 2
        }, {
            y: 3,
            ease: Power1.easeInOut,
            repeat: -1,
            yoyo: true
        });
        U.fromTo(m.material, h.aniTimeFadeIn * .2, {
            opacity: 0
        }, {
            opacity: .95,
            ease: Power1.easeOut
        }, "nStart -= 0").fromTo(m.position, h.aniTimeFadeIn, {
            z: 0
        }, {
            z: 33,
            ease: Power1.easeOut,
            onComplete: function () {
                var e = w.clipAction(v);
                e.paused = false
            }
        }, "nStart -= 0").to(m.rotation, h.aniTime, {
            y: ye(95),
            ease: Power1.easeOut
        }).to(m.rotation, h.aniTime * .8, {
            y: ye(85),
            ease: Power1.easeOut
        }).to(m.rotation, h.aniTime * .9, {
            y: ye(90),
            ease: Power2.easeOut,
            onComplete: function () {
                q.play()
            }
        }).to(objExtra1.position, h.aniTime * 1.1, {
            z: 40,
            x: 4,
            ease: Power2.easeOut
        }, "ani1-=2.5").to(objExtra1.material, h.aniTime * .8, {
            opacity: 1,
            ease: Power2.easeOut
        }, "ani1-=2.5");
        N.staggerFromTo(a, h.extra1Animation * 1.5, {
            z: ye(0),
            y: ye(0),
            ease: Power3.easeOut
        }, {
            z: ye(-.7),
            y: ye(-4),
            ease: Power3.easeOut
        }, .1, "start-=0", r).staggerFromTo(o, h.extra1Animation * 1.3, {
            z: 0,
            ease: Power3.easeOut
        }, {
            z: -ye(4.5),
            y: -ye(4.5),
            ease: Power3.easeOut
        }, .2, "start-=0").fromTo(t, h.extra1Animation * 1.3, {
            x: 0,
            ease: Power3.easeOut
        }, {
            x: -.3,
            ease: Power3.easeOut
        }, "start-=0").to(i, h.extra1Animation * .85, {
            x: 1.08,
            y: 1.08,
            z: 1.08,
            ease: Power2.easeInOut,
            repeat: -1,
            yoyo: true
        }, "start-=0").staggerFromTo(n, h.extra1Animation * 1.3, {
            z: ye(0),
            y: ye(0),
            ease: Power4.easeOut
        }, {
            z: ye(-.7),
            y: ye(-3),
            ease: Power4.easeOut
        }, .2, "start-=0", l).fromTo(s, h.extra1Animation * 1.3, {
            x: 0,
            ease: Power4.easeOut
        }, {
            x: -.3,
            ease: Power4.easeOut
        }, "start-=0");
        Q.play()
    };
    var pt = function () {
        TweenMax.ticker.removeEventListener("tick", ve);
        q.pause();
        N.pause();
        Q.pause()
    };
    var ut = function () {
        TweenMax.ticker.addEventListener("tick", ve);
        q.resume();
        N.resume();
        Q.resume()
    };
    var ht = function () {
        $(".webGL-main").removeClass("owleyes");
        q.stop();
        N.stop();
        K.stop();
        n.context = null;
        n.domElement = null;
        n = null;
        TweenMax.ticker.removeEventListener("tick", ve);
        while (l.children.length > 0) {
            l.remove(l.children[0])
        }
        container.remove();
        $(window).off("resize.titlesAnimation")
    };
    return {
        init: Ie,
        playHomeAnimation: ot,
        playOutsourcingAnimation: dt,
        playContactAnimation: it,
        playJobsAnimation: nt,
        playAboutAnimation: st,
        playNewsLetterAnimation: lt,
        playNearshoringAnimation: ct,
        playSoftwareAnimation: ft,
        handleWindowResize: et,
        startNewsletterTicker: rt,
        savePrintScreenOnClick: Pe,
        pause: pt,
        resume: ut,
        kill: ht
    }
}

function globalStickyHeader() {
    var e = null;
    if (_customScroll == null) {
        var t = function () {
            e = _rAF_loop(o)
        };
        $_window[0].addEventListener("scroll", t, {
            passive: true
        });
        var a = {
            offset: {
                y: -1
            }
        };
        a.offset.y = window.pageYOffset
    } else {
        _header_scroll_listener = function (e) {
            o(e)
        };
        _customScroll.addListener(_header_scroll_listener)
    }

    function o(e) {
        if (_customScroll == null) {
            _scrollY = window.pageYOffset;
            var e = {
                offset: {
                    y: -1
                },
                limit: {
                    y: _scrollLimit
                },
                direction: {
                    y: _scrollDirection
                }
            };
            e.offset.y = window.pageYOffset
        }
        if (!$_html.hasClass("ie") && !$_html.hasClass("edge") && !$_body.hasClass("mobile")) {
            $_headerMain.css("top", e.offset.y)
        }
        if (e.offset.y <= 0) {
            $_headerMain.removeClass("js-drop");
            TweenMax.to($_headerMain, 1.5, {
                y: 0,
                force3D: true,
                ease: Expo.easeOut
            })
        }
        if (_scrollDirection == "down" && e.offset.y > 10) {
            TweenMax.to($_headerMain, 2, {
                y: -200,
                force3D: true,
                ease: Expo.easeOut
            });
            if (_scrollY > 100 && !$_headerMain.hasClass("js-drop")) {
                $_headerMain.addClass("js-drop")
            }
        } else {
            if (!$(".start-project").find(".project-form").hasClass("js-open-form")) {
                TweenMax.to($_headerMain, 1.5, {
                    y: 0,
                    force3D: true,
                    ease: Expo.easeOut
                })
            }
            if (_scrollY < 100) {
                $_headerMain.removeClass("js-drop")
            }
        }
    }
}

function statisticsAnimation() {
    var e = $(".statistics");
    var t = {
        rootMargin: "0px",
        threshold: [0]
    };
    var a = function (e, t) {
        e.forEach(function (e) {
            if (e.isIntersecting || e.intersectionRatio > 0) {
                t.unobserve(e.target);
                e.target.odometer.update(e.target.initialValue)
            }
        })
    };
    var r = new IntersectionObserver(a, t);
    e.each(function (e) {
        var t = $(this),
            a = t.text(),
            o = "",
            i = "d",
            n = null;
        if (t.length) {
            t[0].odometer = n;
            t[0].initialValue = a;
            for (var s = 0; s < a.length; s++) o += "8";
            if (e == 2) {
                o = "99.9";
                i = "(dd).d"
            }
            t[0].odometer = new Odometer({
                el: t[0],
                value: o,
                format: i,
                duration: 100
            });
            r.observe(t[0])
        }
    })
}

function randomSentenceTransition() {
    var e = $(".bg-transition-new").find("h2"),
        t = JSON.parse($(".bg-transition-new").attr("data-phrases")),
        a = Math.floor(Math.random() * 5 + 0);
    if (t != null) e.html(t[a].phrase)
}

function hoverLinksMenu() {
    var e = $("#nav-main"),
        t = $("#nav-main li"),
        a = $("#nav-main li a");
    var o = function () {
        a.each(function () {
            var e = $(this);
            if (e.length <= 0) return;
            var t = e.text().split(" "),
                a = e;
            e.text("");
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                for (var n = 0; n < i.length; n++) {
                    var s = $("<span class='char'>" + i[n] + "</span>");
                    e.append(s)
                }
            }
            $(".char").css("display", "inline-block")
        })
    };
    var i = function (e, t) {
        var a = e.find(".char"),
            o = e.attr("data-color");
        if (t == "in") {
            TweenMax.staggerTo(a, 1, {
                color: o,
                ease: Expo.easeOut
            }, .05)
        } else {
            if (!$_body.hasClass("home")) {
                TweenMax.staggerTo(a, 1, {
                    color: "#9fa6b6",
                    ease: Expo.easeOut
                }, .05)
            } else {
                if (!$("#header-main").hasClass("js-drop")) {
                    TweenMax.staggerTo(a, 1, {
                        color: "#ffffff",
                        ease: Expo.easeOut
                    }, .05, function () {
                        TweenMax.set(a, {
                            clearProps: "color"
                        })
                    })
                } else {
                    TweenMax.staggerTo(a, 1, {
                        color: "#9fa6b6",
                        ease: Expo.easeOut
                    }, .05, function () {
                        TweenMax.set(a, {
                            clearProps: "color"
                        })
                    })
                }
            }
        }
    };
    o();
    t.hover(function () {
        if (!$(this).hasClass("active")) {
            i($(this), "in")
        }
    }, function () {
        if (!$(this).hasClass("active")) {
            i($(this), "out")
        }
    });
    return {
        init: o,
        hover: i
    }
}

function setupDomElements(e) {
    switch (e) {
        case "single-service":
            if (!$_body.hasClass("mobile")) {
                breakTitleLetters($_pageHeader.find("h2"));
                TweenMax.set($_pageHeader.find("h2 .char"), {
                    y: "100px",
                    opacity: 0
                });
                TweenMax.set($_pageHeader.find(".letter-wrapper"), {
                    opacity: 0,
                    scale: .85
                });
                TweenMax.set($_pageHeader.find(".js-pet"), {
                    opacity: 0,
                    scale: .85
                });
                TweenMax.set($_pageHeader.find(".background-image"), {
                    opacity: 0
                })
            }
            TweenMax.set($(".navbar-services-wrapper"), {
                y: -$(".navbar-services-wrapper").height() - 50
            });
            break;
        case "somos":
            $(".affinity-brands .block-wrapper").each(function () {
                var e = $(this);
                e.data("real-height-block", e.outerHeight());
                e.find(".gradient-block").data("real-height-gradient", e.find(".gradient-block").height());
                TweenMax.set(e.find(".gradient-block"), {
                    height: "250px",
                    overflow: "hidden"
                })
            });
            break;
        case "queremos":
            TweenMax.set($(".navbar-job-filter-wrapper"), {
                y: -$(".navbar-job-filter-wrapper").height() - 50
            });
            TweenMax.set($(".navbar-job-filter-wrapper .btn-wrapper"), {
                x: _globalViewportW / 2 - $(".navbar-job-filter-wrapper .btn-wrapper").width() / 2 - $(".navbar-job-filter-wrapper .btn-wrapper .open-filter .morph-bg")[0].getBoundingClientRect().width / 2
            });
            $(".navbar-job-filter-wrapper").data("height-block", $(".navbar-job-filter-wrapper").outerHeight());
            $(".navbar-job-filter-wrapper .btn-wrapper .open-filter").data("path-width", $(".navbar-job-filter-wrapper .btn-wrapper .open-filter .morph-bg")[0].getBoundingClientRect().width / 2);
            TweenMax.set($(".navbar-job-filter-wrapper"), {
                height: "91px"
            });
            TweenMax.set($(".navbar-job-filter").find(".option-wrapper:not(.active-option)"), {
                y: "10px",
                autoAlpha: 0
            });
            break;
        case "noticias":
            $.doTimeout(100, function () {
                if (!$_body.hasClass("mobile")) {
                    if (!$_html.hasClass("edge") && !$_html.hasClass("ie")) {
                        TweenMax.set($(".nav-sidebar"), {
                            top: $(".full-page-article .full-page-article-image").offset().top + "px"
                        })
                    }
                } else {}
            });
            if ($_body.hasClass("mobile")) {
                var t = $(".nav-sidebar-item").map(function () {
                    return $(this).height()
                }).get();
                var a = Math.max.apply(null, t);
                $(".nav-sidebar-item").height(a)
            }
            break;
        case "single-queremos":
            $.doTimeout(100, function () {
                if (!$_body.hasClass("mobile")) {} else {}
            });
            if ($_body.hasClass("mobile")) {
                var t = $(".nav-sidebar-item").map(function () {
                    return $(this).height()
                }).get();
                var a = Math.max.apply(null, t);
                $(".nav-sidebar-item").height(a)
            }
            break
    }
    if (!$_body.hasClass("mobile")) {
        TweenMax.set($_pageHeader.find("h2"), {
            opacity: 0
        });
        TweenMax.set($_pageHeader.find("h3"), {
            opacity: 0
        })
    }
}

function readProgress() {
    var i = $(".scroll-indicator-wrapper"),
        n = i.find(".scroll-indicator"),
        s = $(".full-page-article").eq(0),
        e = $(".nav-sidebar-item").eq(0).offset().top - $(".nav-sidebar").offset().top,
        t = $(".nav-sidebar-item").eq(0).height(),
        a = 0,
        r = 0,
        l = $(".full-page-article").eq(0).outerHeight(),
        o = null,
        c = false,
        f = 0;
    var d = function () {
        TweenMax.set(i, {
            y: e,
            height: t - 4,
            top: "2px"
        });
        TweenMax.set(n, {
            scaleY: 0
        });
        s = $(".full-page-article").eq(0);
        l = $(".full-page-article").eq(0).outerHeight();
        o = _rAF_loop(h);
        h()
    };
    var p = function (e, t, a) {
        c = true;
        var o = $(".nav-sidebar-item").eq(e).offset().top - $(".nav-sidebar").offset().top + a;
        s = $(".full-page-article").eq(e - t);
        l = $(".full-page-article").eq(e - t).outerHeight(), r = e;
        if (_scrollDirection == "down") {
            TweenMax.to(n, 1, {
                scaleY: 0,
                transformOrigin: "top center",
                ease: Expo.easeOut,
                onComplete: function () {
                    c = false
                }
            });
            TweenMax.to(i, 1, {
                y: o,
                ease: Expo.easeOut
            })
        } else {
            TweenMax.to(n, 1, {
                scaleY: 1,
                transformOrigin: "bottom center",
                delay: 0,
                ease: Expo.easeOut,
                onComplete: function () {
                    c = false
                }
            });
            TweenMax.to(i, 1, {
                y: o,
                ease: Expo.easeOut
            })
        }
    };
    var u = function () {
        window.cancelAnimationFrame(o);
        o = null
    };

    function h() {
        o = _rAF_loop(h);
        if (!c) {
            var e = s.offset().top + s.outerHeight() - _globalViewportH;
            if (e <= 0) e = 0;
            f = normalizedValue(e, l, 0);
            TweenMax.to(n, .2, {
                scaleY: 1 - f,
                transformOrigin: "top center",
                ease: Power2.easeOut
            })
        }
    }
    return {
        init: d,
        changeNew: p,
        kill: u
    }
}

function initForm(e) {
    var n = e,
        t = n.find("input[type='text'], textarea"),
        o = n.find(".file-input"),
        a = n.find("label"),
        i = n.find(".wrapper-input"),
        s = n.find("input.required, textarea.required"),
        r = 0;
    t.on("keyup", l);
    t.on("click", function () {
        var e = $(this);
        e.closest(i).addClass("is-focused")
    });
    t.on("keydown", function (e) {
        var t = e.keyCode || e.which,
            a = $(this);
        if (t == 9) {
            a.closest(".input-area").next(".input-area").find(i).addClass("is-focused");
            if (a.closest(".input-area").next(".input-area").index() == -1) {
                n.find(".mt-negative").find(i).addClass("is-focused")
            }
        }
    });
    n.find('input[type="file"]').change(function (e) {
        var t = n.find('input[type="file"]');
        var a = t[0].files[0];
        if (a)
            if (a.type.indexOf("pdf") !== -1) {
                if (a.size > 1e6) {
                    n.find('input[type="file"]').addClass("erro");
                    n.find('input[type="file"]').closest(".wrapper-input").addClass("erro").removeClass("with-file");
                    o.find(".file-name").html(o.find(".file-name").attr("data-original"))
                } else {
                    o.find(".file-name").html(a["name"]);
                    o.removeClass("erro").addClass("with-file");
                    o.closest(".wrapper-input").removeClass("erro")
                }
            } else {
                n.find('input[type="file"]').addClass("erro").removeClass("with-file");
                n.find('input[type="file"]').closest(".wrapper-input").addClass("erro");
                o.find(".file-name").html(o.find(".file-name").attr("data-original"))
            }
    });
    t.on("focus", function () {
        var e = $(this);
        e.closest(i).removeClass("is-focused")
    });
    t.on("blur", function () {
        var e = $(this);
        if (!$.trim(e.val()).length) {
            e.closest(i).removeClass("is-focused");
            e.addClass("no-value")
        }
        if (e.val() === 0 || e.val() == "") {
            TweenMax.staggerTo(n.find("label"), .5, {
                opacity: 1,
                ease: Expo.easeOut
            })
        }
        validateForm(n);
        if (e.hasClass("phone")) {
            var t = /^[+]?[0-9 ]{9,}$/,
                a = e.val();
            if (t.test(e.val()) && a.length >= 9) {
                e.removeClass("erro");
                e.closest(i).removeClass("erro")
            } else {
                e.addClass("erro");
                e.closest(i).addClass("erro")
            }
            if (e.val().length === 0) {
                e.removeClass("erro");
                e.closest(i).removeClass("erro")
            }
        }
        if (e.hasClass("url")) {
            var t = /^(ftp|http|https):\/\/[^ "]+$/,
                o = e.val();
            if (t.test(o)) {
                e.removeClass("erro");
                e.closest(i).removeClass("erro")
            } else {
                e.addClass("erro");
                e.closest(i).addClass("erro")
            }
        }
        if (e.hasClass("required")) {
            s.each(function () {
                var e = $(this);
                if (e.val().length > 0 && !e.hasClass("erro")) {
                    r += 1;
                    if (r >= s.length) {
                        TweenMax.to(n.find("button"), .5, {
                            opacity: 1,
                            pointerEvents: "visible"
                        })
                    } else {
                        n.find("button").attr("style", "")
                    }
                } else {
                    n.find("button").attr("style", "")
                }
            })
        }
        r = 0
    });
    $(".rgpd-wrapper").on("click", function () {
        if (!$("form button.elastic-btn").hasClass("active")) {
            $("form button.elastic-btn").addClass("active");
            $("form .rgpd-wrapper svg").addClass("active");
            $("form.contact-form input.check-policy").val("checked");
            $("form.contact-form input.check-policy").trigger("blur")
        } else {
            $("form button.elastic-btn").removeClass("active");
            $("form .rgpd-wrapper svg").removeClass("active");
            $("form.contact-form input.check-policy").val("");
            $("form.contact-form input.check-policy").trigger("blur")
        }
    });

    function l() {
        var e = $(this);
        if (e.val() != " ") {
            if (e.hasClass("no-value")) {
                e.removeClass("no-value")
            }
        }
        if (!$.trim(e.val()).length) {
            e.closest(i).removeClass("is-focused");
            e.addClass("no-value")
        }
        if (e.val() === 0 || e.val() == "") {
            TweenMax.staggerTo(n.find("label"), .5, {
                opacity: 1,
                ease: Expo.easeOut
            })
        }
        validateForm(n);
        if (e.hasClass("phone")) {
            var t = /^[+]?[0-9 ]{9,}$/,
                a = e.val();
            if (t.test(e.val()) && a.length >= 9) {
                e.removeClass("erro");
                e.closest(i).removeClass("erro")
            } else {
                e.addClass("erro");
                e.closest(i).addClass("erro")
            }
            if (e.val().length === 0) {
                e.removeClass("erro");
                e.closest(i).removeClass("erro")
            }
        }
        if (e.hasClass("url")) {
            var t = /^(ftp|http|https):\/\/[^ "]+$/,
                o = e.val();
            if (t.test(o)) {
                e.removeClass("erro");
                e.closest(i).removeClass("erro")
            } else {
                e.addClass("erro");
                e.closest(i).addClass("erro")
            }
        }
        if (e.hasClass("required")) {
            s.each(function () {
                var e = $(this);
                if (e.val().length > 0 && !e.hasClass("erro")) {
                    r += 1;
                    if (r >= s.length) {
                        TweenMax.to(n.find("button"), .5, {
                            opacity: 1,
                            pointerEvents: "visible"
                        })
                    } else {
                        n.find("button").attr("style", "")
                    }
                } else {
                    n.find("button").attr("style", "")
                }
            })
        }
        r = 0
    }
    n.on("submit", function (e) {
        var t = $(this);
        n.css("pointer-events", "none");
        $(".form-container .form-options").css("pointer-events", "none");
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        if (!n.hasClass("sending")) {
            n.addClass("sending");
            breakTitleLetters(n.find(".elastic-btn .text"));
            TweenMax.staggerTo(n.find(".elastic-btn .text .char"), .5, {
                y: "-50px",
                ease: Expo.easeOut
            }, .05);
            TweenMax.to(n.find(".loader-wrapper"), .2, {
                opacity: 1,
                delay: 1
            });
            if ($(".page-toload").hasClass("single-queremos-page")) {
                var a = new FormData;
                var o = n.find('input[type="file"]');
                var i = o[0].files[0];
                a.append("mail_to", n.find("#mail-to").val());
                a.append("_wp_http_referer", n.find("input[name='_wp_http_referer']").val());
                a.append("affinity_nonce", n.find("input[name='affinity_nonce']").val());
                a.append("candidaturas_id", n.find("#candidatura-id").val());
                a.append("candidaturas_title", n.find("#title").val());
                a.append("language", n.find("#language").val());
                a.append("candidaturas_name", n.find("#name").val());
                a.append("candidaturas_email", n.find("#email").val());
                a.append("candidaturas_contact", n.find("#contact").val());
                a.append("candidaturas_linkedin", n.find("#linkedin").val());
                a.append("candidaturas_cv", n.find("#cv").val());
                a.append("file", i);
                a.append("action", "saveCarreirasForm");
                submitFormData(a, function (e) {
                    TweenMax.to(n.find(".elastic-btn"), .5, {
                        opacity: 0
                    });
                    TweenMax.fromTo(n.find(".sent-message .success-msg"), 1, {
                        autoAlpha: 0,
                        y: 40
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Expo.easeOut
                    })
                }, function (e) {
                    TweenMax.to(n.find(".elastic-btn"), .5, {
                        opacity: 0
                    });
                    TweenMax.fromTo(n.find(".sent-message .error-msg"), 1, {
                        autoAlpha: 0,
                        y: 40
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Expo.easeOut
                    })
                })
            }
            if ($(".page-toload").hasClass("estamos-page")) {
                if ($(".contact-form").attr("data-type") == "know-about-affinity") {
                    var a = new FormData;
                    a.append("mail_to", n.find("#mail-to").val());
                    a.append("_wp_http_referer", n.find("input[name='_wp_http_referer']").val());
                    a.append("affinity_nonce", n.find("input[name='affinity_nonce']").val());
                    a.append("language", n.find("#language").val());
                    a.append("contacto_name", n.find("#name").val());
                    a.append("contacto_email", n.find("#email").val());
                    a.append("contacto_phone", n.find("#phone").val());
                    if (n.find("#linkedin").val() != "") {
                        a.append("contacto_linkedin", n.find("#linkedin").val())
                    } else {
                        a.append("contacto_linkedin", "—")
                    }
                    if (n.find("#message").val() != "") {
                        a.append("contacto_message", n.find("#message").val())
                    } else {
                        a.append("contacto_message", "—")
                    }
                    if (i) {
                        a.append("file", i);
                        a.append("file_name", i.name)
                    }
                    if (n.find("#company").val() != "") {
                        a.append("contacto_company", n.find("#company").val())
                    } else {
                        a.append("contacto_company", "—")
                    }
                    if (n.find("#collaborators").val() != "") {
                        a.append("contacto_collaborators", n.find("#collaborators").val())
                    } else {
                        a.append("contacto_collaborators", "—")
                    }
                    a.append("action", "saveContactoForm")
                } else if ($(".contact-form").attr("data-type") == "affinity-player") {
                    var a = new FormData;
                    var o = $("#file-upload");
                    var i = o[0].files[0];
                    a.append("mail_to", n.find("#mail-to").val());
                    a.append("_wp_http_referer", n.find("input[name='_wp_http_referer']").val());
                    a.append("affinity_nonce", n.find("input[name='affinity_nonce']").val());
                    a.append("language", n.find("#language").val());
                    a.append("contacto_name", n.find("#name").val());
                    a.append("contacto_email", n.find("#email").val());
                    a.append("contacto_phone", n.find("#phone").val());
                    if (n.find("#message").val() != "") {
                        a.append("contacto_message", n.find("#message").val())
                    } else {
                        a.append("contacto_message", "—")
                    }
                    if (n.find("#linkedin").val() != "") {
                        a.append("contacto_linkedin", n.find("#linkedin").val())
                    } else {
                        a.append("contacto_linkedin", "—")
                    }
                    if (i) {
                        a.append("file", i);
                        a.append("file_name", i.name)
                    }
                    if (n.find("#company").val() != "") {
                        a.append("contacto_company", n.find("#company").val())
                    } else {
                        a.append("contacto_company", "—")
                    }
                    if (n.find("#collaborators").val() != "") {
                        a.append("contacto_collaborators", n.find("#collaborators").val())
                    } else {
                        a.append("contacto_collaborators", "—")
                    }
                    a.append("action", "saveContactoForm")
                } else {
                    var a = new FormData;
                    var o = n.find('input[type="file"]');
                    var i = o[0].files[0];
                    a.append("mail_to", n.find("#mail-to").val());
                    a.append("_wp_http_referer", n.find("input[name='_wp_http_referer']").val());
                    a.append("affinity_nonce", n.find("input[name='affinity_nonce']").val());
                    a.append("language", n.find("#language").val());
                    a.append("contacto_name", n.find("#name").val());
                    a.append("contacto_email", n.find("#email").val());
                    a.append("contacto_phone", n.find("#phone").val());
                    if (n.find("#linkedin").val() != "") {
                        a.append("contacto_linkedin", n.find("#linkedin").val())
                    } else {
                        a.append("contacto_linkedin", "—")
                    }
                    if (n.find("#message").val() != "") {
                        a.append("contacto_message", n.find("#message").val())
                    } else {
                        a.append("contacto_message", "—")
                    }
                    if (n.find("#company").val() != "") {
                        a.append("contacto_company", n.find("#company").val())
                    } else {
                        a.append("contacto_company", "—")
                    }
                    if (n.find("#collaborators").val() != "") {
                        a.append("contacto_collaborators", n.find("#collaborators").val())
                    } else {
                        a.append("contacto_collaborators", "—")
                    }
                    a.append("contacto_city", n.find(".options-main-wrapper .option-wrapper.done").attr("data-city"));
                    if (i) {
                        a.append("file", i);
                        a.append("file_name", i.name)
                    } else {
                        a.append("file_name", "—")
                    }
                    a.append("action", "saveContactoForm")
                }
                submitFormData(a, function (e) {
                    $.doTimeout(2e3, function () {
                        if ($("body").hasClass("en-lang")) {
                            n.find(".elastic-btn .text").text("Sent")
                        } else {
                            n.find(".elastic-btn .text").text("Enviado")
                        }
                        breakTitleLetters(n.find(".elastic-btn .text"));
                        n.find(".elastic-btn").css("pointer-events", "none");
                        TweenMax.set(n.find(".elastic-btn .text .char"), {
                            y: "-50px"
                        })
                    });
                    $.doTimeout(4e3, function () {
                        TweenMax.staggerTo(n.find(".elastic-btn .text .char"), 1, {
                            y: "0px",
                            opacity: 1,
                            ease: Expo.easeOut
                        }, -.05, function () {
                            $("form.contact-form")[0].reset();
                            $("form.contact-form input").removeClass("erro");
                            $("form.contact-form .wrapper-input").removeClass("is-focused");
                            $("form button.elastic-btn").removeClass("active");
                            $("form .rgpd-wrapper svg").removeClass("active");
                            $("form.contact-form input.check-policy").val("");
                            $("form.contact-form input.check-policy").trigger("blur");
                            $(".file-container span").html("Max. file size 5mb. Allowed format: PDF");
                            $(".wrapper-input").removeClass("erro");
                            n.css("pointer-events", "all");
                            $(".form-container .form-options").css("pointer-events", "none");
                            TweenMax.to($(".options-main-wrapper  .option-wrapper.done").find(".full"), 1, {
                                opacity: 0,
                                ease: Elastic.easeOut.config(1, .7)
                            });
                            TweenMax.to($(".options-main-wrapper  .option-wrapper.done").find(".dash"), 1, {
                                strokeDashoffset: 23,
                                ease: Elastic.easeOut.config(1, .7),
                                onComplete: function () {
                                    n.find(".options-main-wrapper .option-wrapper.done").removeClass("done")
                                }
                            });
                            if ($("body").hasClass("en-lang")) {
                                n.find(".elastic-btn .text").text("Send Message")
                            } else {
                                n.find(".elastic-btn .text").text("Enviar Mensagem")
                            }
                        });
                        TweenMax.to(n.find(".loader-wrapper"), .2, {
                            opacity: 0
                        })
                    });
                    console.log("success", e)
                }, function () {
                    console.log("error", data)
                })
            }
        } else {}
    })
}

function animateRollingLetters() {
    var e = $(".rolling-letters"),
        t = $(".slides"),
        a = 0,
        o = null,
        i = false;
    var n = function () {
        TweenMax.set(e.find(".js-letter-anime"), {
            opacity: 0
        });
        t.bind("contentchanged", function () {
            s(t)
        });
        s(t)
    };

    function s(e) {
        var t = e.find("li").length;
        e.find("li:nth-child(-n+3)").clone().appendTo(e);
        e.css("animation-duration", t * 2 + "s")
    }
    var r = function () {
        i = true;
        t.addClass("animate");
        TweenMax.staggerTo(e.find(".js-letter-anime"), 1, {
            opacity: 1
        }, .5)
    };
    var l = function () {
        i = false;
        t.removeClass("animate")
    };
    var c = function () {
        window.cancelAnimationFrame(o);
        o = null
    };

    function f() {
        o = _rAF_loop(f);
        if (i) {
            TweenMax.to(e, .2, {
                x: "-=10px"
            });
            if (!verge.inViewport(e)) {
                TweenMax.set(e, {
                    x: _globalViewportW
                })
            }
        }
    }
    return {
        init: n,
        animate: r,
        pause: l,
        kill: c
    }
}

function animateMorphLetters() {
    var e = $(".morphing-letter");
    e.each(function () {
        var e = $(this),
            t = new TimelineMax({
                paused: true
            });
        e.data("normal", e.find("svg .main-letter").attr("d"));
        e.data("active", e.attr("data-morphPath"));
        t.to([e.find(".letter"), e.find(".mask")], 2, {
            morphSVG: e.data("active"),
            repeat: -1,
            yoyo: true,
            ease: Sine.easeOut
        });
        e.data("animation", t)
    })
}

function elasticButtonsInputs(e, t) {
    var a = $(".elastic-btn"),
        o = $(".elastic-input");
    if (e != null) {
        a = e
    }
    if (t != null) {
        o = t
    }
    a.each(function () {
        var e = $(this);
        e.hover(function () {
            var e = $(this),
                t = e.find(".morph-bg"),
                a = e.find(".morph-element");
            if (e.hasClass("js-btn-clicked")) return;
            TweenMax.to(t, 1, {
                morphSVG: t.attr("data-hover"),
                ease: Elastic.easeOut.config(1, .5)
            })
        }, function () {
            var e = $(this),
                t = e.find(".morph-bg"),
                a = e.find(".morph-element");
            if (e.hasClass("js-btn-clicked")) return;
            TweenMax.to(t, 1, {
                morphSVG: t.attr("data-original"),
                ease: Elastic.easeOut.config(1, .5)
            })
        })
    });
    o.each(function () {
        var e = $(this),
            t = e.find(".morph-bg"),
            a = e.find(".morph-element");
        e.find("input").on("focus", function () {
            TweenMax.to(t, 1, {
                morphSVG: t.attr("data-hover"),
                ease: Elastic.easeOut.config(1, .5)
            })
        }).on("blur", function () {
            TweenMax.to(t, 1, {
                morphSVG: t.attr("data-original"),
                ease: Elastic.easeOut.config(1, .5)
            })
        })
    })
}

function breakTitleWords(e) {
    if (e.length <= 0) return;
    var t = e.text().split(" "),
        a = e;
    e.text("");
    for (var o = 0; o < t.length; o++) {
        var i = t[o];
        if (o + 1 == t.length) var n = $("<span class='word'>" + i + "</span>");
        else var n = $("<span class='word'>" + i + "&nbsp;</span>");
        n.css({
            display: "inline-block",
            "font-family": "inherit",
            "font-size": "inherit",
            "line-height": "inherit",
            "letter-spacing": "inherit",
            color: "inherit"
        });
        e.append(n)
    }
}

function breakTitleLetters(e) {
    if (e.length <= 0) return;
    var t = e.text().split("<br>"),
        a = e;
    e.text("");
    for (var o = 0; o < t.length; o++) {
        var i = t[o];
        for (var n = 0; n < i.length; n++) {
            if (i[n] == " ") {
                var s = "spacer";
                i[n] = "&nbsp;"
            } else var s = "";
            var r = $("<span class='char " + s + "'>" + i[n] + "</span>");
            r.css({
                color: "inherit",
                "font-family": "inherit"
            });
            e.append(r)
        }
        e.append("<br>")
    }
}

function hashtagScroll() {
    $_pageContent.append("<div id='hashtag-scroll'><h2></h2></div>");
    var t = $("#hashtag-scroll"),
        a = $(".js-hashtag-scroll"),
        o = 0,
        i;
    $.doTimeout(1e3, function () {
        i = a.eq(0).offset().top
    });
    if ($_body.hasClass("home")) {
        o = a.eq(a.length - 1).offset().top
    } else {
        o = $(".technologies-list h2").offset().top
    }
    var e = function (e) {
        t.css({
            top: e + _globalViewportH / 2 - t.height() / 2 + "px"
        });
        if (verge.inViewport(a.eq(0), -(_globalViewportH / 2 - t.outerHeight()))) {
            TweenMax.to(t, 2, {
                opacity: 1
            })
        }
        if ($_body.hasClass("home")) {
            if (e < i - _globalViewportH / 2 + t.height() / 2) {
                t.css({
                    top: i
                });
                TweenMax.to(t.find("h2"), .5, {
                    opacity: 1
                })
            } else if (o - e - t.outerHeight() - t.outerHeight() / 2 <= 0) {
                t.css({
                    top: o + t.height() / 2
                });
                TweenMax.to(t.find("h2"), .5, {
                    opacity: 1
                })
            }
        } else {
            if (e < i - _globalViewportH / 2 + t.height() / 2) {
                t.css({
                    top: i
                });
                TweenMax.to(t.find("h2"), .5, {
                    opacity: 1
                })
            } else if (o - e - _globalViewportH / 2 + t.height() / 2 <= 0) {
                t.css({
                    top: o
                });
                TweenMax.to(t.find("h2"), .5, {
                    opacity: 1
                })
            }
        }
        a.each(function () {
            var e = $(this);
            if (verge.inViewport(e, -(_globalViewportH / 2 - t.outerHeight()))) {
                t.find("h2").html(e.closest("section").find(".js-write-text").text())
            }
        })
    };
    return {
        init: e
    }
}

function initViewportAnimations() {
    var t = $(".js-title-element"),
        a = $(".js-bigText-element"),
        o = $(".js-text-element"),
        e = $(".js-parallax-phrase"),
        i = $(".js-write-text"),
        n = $(".image-blocks .question-wrapper, .recruitment .question-wrapper"),
        s = $(".image-blocks .answer-wrapper-text, .recruitment .answer-wrapper-text"),
        r = null,
        l = null;
    var c = function () {
        var e = {
            rootMargin: "0px",
            threshold: [0, .75]
        };
        l = function (e, a) {
            e.forEach(function (e) {
                if (e.isIntersecting || e.intersectionRatio > 0) {
                    a.unobserve(e.target);
                    switch (e.target.type) {
                        case "titleElement":
                            var t = $(e.target);
                            TweenMax.to(t, 1, {
                                y: "0px",
                                ease: Power4.easeOut
                            });
                            break;
                        case "textElement":
                            var t = $(e.target);
                            TweenMax.to(t, 1, {
                                x: "0px",
                                opacity: 1,
                                ease: Power4.easeOut
                            });
                            break;
                        case "bigTextElement":
                            var t = $(e.target);
                            TweenMax.to(t, 1, {
                                y: "0px",
                                opacity: 1,
                                ease: Power4.easeOut
                            });
                            break;
                        case "imageBlocksQuestionElement":
                            var t = $(e.target);
                            TweenMax.staggerTo([t.find("h2"), t.find("h3")], .5, {
                                y: "0px",
                                opacity: 1,
                                delay: .8
                            }, .2);
                            TweenMax.staggerTo(t, 1, {
                                scaleX: 1,
                                ease: Power4.easeOut
                            });
                            if (t.closest(".question-row").find(".image-wrapper")) {
                                TweenMax.to(t.closest(".question-row").find(".image-wrapper"), 2, {
                                    opacity: 1,
                                    scale: 1,
                                    delay: 2,
                                    ease: Elastic.easeOut.config(1, .8)
                                })
                            }
                            break;
                        case "imageBlocksAnswerElement":
                            var t = $(e.target);
                            TweenMax.to([t.find("h3")], .5, {
                                y: "0px",
                                opacity: 1,
                                delay: .8
                            });
                            TweenMax.to([t.find("h4")], .5, {
                                y: "0px",
                                opacity: .6,
                                delay: 1.5
                            });
                            TweenMax.staggerTo(t, 1, {
                                scaleX: 1,
                                ease: Expo.easeOut
                            });
                            break;
                        case "writeTextElement":
                            var t = $(e.target);
                            TweenMax.staggerTo(t.find(".char"), 0, {
                                opacity: 1,
                                delay: .5
                            }, .05);
                            break
                    }
                }
            })
        };
        r = new IntersectionObserver(l, e);
        t.each(function (e) {
            var t = $(this);
            t[0].type = "titleElement";
            t.wrap("<div class='overflow-wrap'></div>");
            t.parent(".overflow-wrap").css({
                height: t.height() + 15,
                marginBottom: t.css("marginBottom")
            });
            TweenMax.set(t[0], {
                y: t.height()
            });
            r.observe(t[0])
        });
        o.each(function (e) {
            var t = $(this);
            t[0].type = "textElement";
            TweenMax.set(t[0], {
                x: "-40px",
                opacity: 0
            });
            r.observe(t[0])
        });
        i.each(function () {
            var e = $(this);
            e[0].type = "writeTextElement";
            TweenMax.set(e.find(".char"), {
                opacity: 0
            });
            r.observe(e[0])
        });
        a.each(function (e) {
            var t = $(this);
            t[0].type = "bigTextElement";
            TweenMax.set(t[0], {
                y: "100px",
                opacity: 0
            });
            r.observe(t[0])
        });
        n.each(function () {
            var e = $(this);
            e[0].type = "imageBlocksQuestionElement";
            TweenMax.set([e.find("h2"), e.find("h3")], {
                y: "40px",
                opacity: 0
            });
            TweenMax.set(e, {
                scaleX: .01
            });
            r.observe(e[0])
        });
        s.each(function () {
            var e = $(this);
            e[0].type = "imageBlocksAnswerElement";
            TweenMax.set([e.find("h3"), e.find("h4")], {
                y: "40px",
                opacity: 0
            });
            TweenMax.set(e, {
                scaleX: .01
            });
            r.observe(e[0])
        })
    };
    var f = function () {
        r = null;
        l = null
    };
    return {
        init: c,
        kill: f
    }
}

function initScrollAnimations() {
    var e = $(".js-parallax-phrase"),
        s = [],
        t = $(".js-parallax-image"),
        r = [];
    var a = function () {
        e.each(function () {
            var e = $(this),
                t = {};
            breakTitleWords(e.find("h2"));
            t.element = e;
            t.height = e.height();
            t.offsetY = e.offset().top;
            s.push(t)
        });
        t.each(function () {
            var e = $(this),
                t = {};
            t.element = e;
            t.height = e.height();
            t.offsetY = e.offset().top;
            t.friction = e.attr("data-friction");
            r.push(t)
        })
    };
    var o = function () {
        for (var e = 0, t = s.length; e < t; e++) {
            if (checkInView(s[e], .5)) {
                var a = s[e].element,
                    o = s[e].offsetY - _scrollY + _globalViewportH * .5,
                    i = (_globalViewportH - o) / _globalViewportH;
                a.find(".word").each(function (e) {
                    var t = $(this);
                    TweenMax.to(t, .25, {
                        y: i * 100 * e
                    })
                })
            }
        }
        for (var e = 0, t = r.length; e < t; e++) {
            if (checkInView(r[e], 0)) {
                var a = r[e].element,
                    o = r[e].offsetY - _scrollY + _globalViewportH * .5,
                    i = (_globalViewportH - o) / _globalViewportH,
                    n = r[e].friction;
                if (!$_html.hasClass("ie") || !$_html.hasClass("edge")) {
                    TweenMax.to(a, .25, {
                        y: -i * 100 * n
                    })
                }
            }
        }
    };
    var i = function () {};
    return {
        init: a,
        update: o,
        kill: i
    }
}

function displacementImage(t) {
    PIXI.utils.skipHello();
    var a = window.devicePixelRatio;
    a = 1;
    var o = new PIXI.autoDetectRenderer(_globalViewportW * 1.1 * a, _globalViewportH * 1.3 * a, {
        transparent: true,
        antialias: true,
        forceCanvas: true
    });
    var i = new PIXI.Container;
    var n = new PIXI.Sprite.fromImage(t.image.attr("src"));
    var s = new PIXI.Sprite.fromImage(t.displacementImage);
    var r = new PIXI.filters.DisplacementFilter(s);
    var l = new PIXI.ticker.Ticker;
    var e = null;
    var c = function () {
        var e = cover(3400, 2328, _globalViewportW * 1.1, _globalViewportH * 1.1, false);
        o.view.style.position = "absolute";
        o.view.style.top = "0px";
        o.view.style.left = "0px";
        o.view.style.width = _globalViewportW * 1.1 * a;
        o.view.style.height = _globalViewportH * 1.1 * a;
        n.anchor.set(0);
        n.width = e.width * a;
        n.height = e.height * a;
        n.x = e.left;
        n.y = e.top;
        t.container.append(o.view);
        i.addChild(n);
        i.interactive = true;
        s.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        i.filters = [r];
        s.anchor.set(.5);
        s.x = o.width / 2;
        s.y = o.height / 2;
        s.scale.x = 20;
        s.scale.y = 20;
        r.autoFit = true;
        r.scale.x = r.scale.y = 0;
        i.addChild(s);
        TweenMax.to($(".page-header canvas"), 1, {
            opacity: 1,
            delay: 1
        });
        l.autoStart = true;
        n.interactive = true;
        $_window.on("resize.displacementImage", $.debounce(200, f));
        $_window.on("mousewheel.displacementImage", function (e) {
            if (_scrollY > _globalViewportH / 2) return false;
            var t = normalizedValue(_scrollY, _globalViewportH / 2, _globalViewportH / 4);
            s.x += _scrollY / 5;
            s.y += _scrollY / 5;
            r.scale.x = _scrollY / 20;
            r.scale.y = _scrollY / 20;
            TweenMax.to(n, .5, {
                alpha: 1 - t
            })
        });
        l.add(function (e) {
            o.render(i)
        })
    };

    function f() {
        o.view.style.top = "0px";
        o.view.style.left = "0px";
        o.view.style.width = $_window.width() * 1.1 * a;
        o.view.style.height = $_window.height() * 1.1 * a;
        o.resize($_window.width() * 1.1 * a, $_window.height() * 1.1 * a);
        var e = cover(3400, 2328, $_window.width() * 1.1, $_window.height() * 1.1, false);
        n.width = e.width * a;
        n.height = e.height * a;
        n.x = e.left;
        n.y = e.top;
        s.x = o.width / 2;
        s.y = o.height / 2
    }
    var d = function () {
        $_window.off("mousewheel.displacementImage");
        $_window.off("resize.displacementImage");
        if (s) s.destroy();
        if (n) n.destroy();
        if (o) o.destroy()
    };
    return {
        init: c,
        kill: d
    }
}

function headerParallax(e) {
    var t = e.find(".background-wrapper"),
        i = t.find(".header-image-wrapper .block-bg-cover");
    init = function () {
        if ($_body.hasClass("js-no-ajax")) var e = 0;
        else var e = .5;
        t.on("mousemove.headerParallax", function (e) {
            var t = $(this);
            var a = e.clientX - t[0].getBoundingClientRect().left - t.width() / 2;
            var o = e.clientY - t[0].getBoundingClientRect().top - t.height() / 2;
            TweenMax.to(i, 1, {
                x: a * .01,
                y: o * .01
            })
        })
    };
    kill = function () {};
    return {
        init: init,
        kill: kill
    }
}

function loveAttraction(e) {
    var t = e.target,
        i = e.factor;
    var a = function () {
        t.each(function () {
            var e = $(this);
            e.on("mousemove.loveAttraction", function (e) {
                var t = $(this);
                var a = e.clientX - t[0].getBoundingClientRect().left - t.width() / 2;
                var o = e.clientY - t[0].getBoundingClientRect().top - t.height() / 2;
                if (t.parent().hasClass("js-open")) {
                    TweenMax.to(t.parent(), .8, {
                        y: "0px",
                        x: "0px",
                        ease: Elastic.easeOut.config(1, .75)
                    });
                    if (t.hasClass("brand-item")) {
                        TweenMax.to(t.find(".brand-logo"), .5, {
                            y: "0px",
                            x: "0px"
                        })
                    }
                } else {
                    TweenMax.to(t.parent(), .5, {
                        x: a * i,
                        y: o * i
                    });
                    if (t.hasClass("brand-item")) {
                        TweenMax.to(t.find(".brand-logo"), .5, {
                            x: a * i * .5,
                            y: o * i * .5
                        })
                    }
                }
            });
            e.on("mouseleave.loveAttraction", function () {
                var e = $(this);
                TweenMax.to(e.parent(), .8, {
                    y: "0px",
                    x: "0px",
                    ease: Elastic.easeOut.config(1, .75)
                });
                if (e.hasClass("brand-item")) {
                    TweenMax.to(e.find(".brand-logo"), .5, {
                        y: "0px",
                        x: "0px"
                    })
                }
            })
        })
    };
    var o = function () {
        t.each(function () {
            $(this).off("mousemove.loveAttraction");
            $(this).off("mouseleave.loveAttraction")
        })
    };
    return {
        init: a,
        kill: o
    }
}

function textFireworks(i, e) {
    var n = i.element,
        s = i.animationType,
        r = i.delay;
    switch (s) {
        case "jellyType":
            var l = new TimelineMax({
                    paused: true
                }),
                t = new SplitText(n, {
                    type: "words,chars"
                }),
                c = t.chars;
            break;
        case "smoothEntrance":
            var l = new TimelineMax({
                    paused: true
                }),
                t = new SplitText(n, {
                    type: "words,chars"
                }),
                c = t.chars;
            break
    }
    var a = function (e) {
        switch (s) {
            case "jellyType":
                TweenMax.set(n, {
                    opacity: 1
                });
                TweenMax.set(n, {
                    perspective: 1e3
                });
                l.staggerFrom(c, .8, {
                    opacity: 0,
                    scale: 0,
                    y: 10,
                    rotationX: 90,
                    transformOrigin: "0% 50% -50",
                    ease: Back.easeOut.config(1)
                }, .015, "+=" + r);
                if (verge.inViewport(n) && !n.hasClass("js-animated")) {
                    $_pageHeader.find("h2").addClass("js-animated");
                    l.play()
                }
                break;
            case "smoothEntrance":
                if (i.setupArgs) {
                    var t = i.setupArgs.yValue,
                        a = i.setupArgs.animationTime
                } else {
                    t = 20;
                    a = .8
                }
                if (n.closest(".header-text").length > 0) var o = .8;
                else var o = 1;
                TweenMax.set(n, {
                    opacity: o
                });
                l.staggerFrom(c, .8, {
                    opacity: 0,
                    y: t,
                    ease: Back.easeOut.config(1)
                }, .015, "+=" + r, function () {
                    if ($_body.hasClass("somos") || $_body.hasClass("estamos") || $_body.hasClass("queremos") || $_body.hasClass("home")) {
                        if (typeof e == "function") e()
                    }
                });
                if (verge.inViewport(n) && !n.hasClass("js-animated")) {
                    $_pageHeader.find("h2").addClass("js-animated");
                    l.play()
                }
                break
        }
    };
    var o = function () {
        l.play()
    };
    var f = function () {
        TweenMax.killTweensOf(l);
        l = null
    };
    return {
        init: a,
        animate: o,
        kill: f
    }
}

function sequenceDance(e) {
    var t = e,
        a = t.find(".break-line"),
        o = t.find(".columns");
    var i = function () {
        TweenMax.set(a, {
            scaleX: 0,
            transformOrigin: "left center"
        });
        TweenMax.set(o.find("svg"), {
            scale: 0
        });
        TweenMax.set([o.find("h3"), o.find("p")], {
            y: "40px",
            opacity: 0
        })
    };
    var n = function () {
        TweenMax.to(a, 3, {
            scaleX: 1,
            ease: Power4.easeOut
        });
        $.doTimeout(333, function () {
            TweenMax.staggerTo(o.find("svg"), 2, {
                scale: 1,
                ease: Elastic.easeOut.config(1, .7)
            }, .33);
            TweenMax.staggerTo(o.find("h3"), 2, {
                y: "0px",
                opacity: 1,
                ease: Elastic.easeOut.config(1, .5)
            }, .33);
            TweenMax.staggerTo(o.find("p"), 2, {
                y: "0px",
                opacity: 1,
                delay: .1,
                ease: Elastic.easeOut.config(1, .5)
            }, .33)
        })
    };
    var s = function () {};
    return {
        init: i,
        animate: n,
        kill: s
    }
}

function letterMorphParallax(e) {
    var t = e;
    var a = function () {
        t.data("normal", "M23.145,369.802  c19.022,255.764,173.271,293.386,379.272,293.386c206.003,0,302.946-143.638,302.946-320.822 c0-177.187-96.944-320.518-302.946-320.823C179.634,21.21,2.745,95.514,23.145,369.802z");
        t.data("active", t.find("path").attr("d"));
        t.find("path").attr("d", t.data("normal"));
        TweenMax.set(t, {
            opacity: 0,
            scale: 0
        });
        var e = $("<div class='js-obj-wrapper'></div>");
        e.css({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            "z-index": 1
        });
        t.wrap(e);
        t.on("mousemove.letterMorphParallax", function (e) {
            var t = $(this);
            var a = e.clientX - t[0].getBoundingClientRect().left - t.width() / 2;
            var o = e.clientY - t[0].getBoundingClientRect().top - t.height() / 2;
            TweenMax.to(t.parent(), .5, {
                x: a * .1,
                y: o * .1
            })
        });
        t.on("mouseleave.letterMorphParallax", function () {
            var e = $(this);
            TweenMax.to(e.parent(), .8, {
                y: "0px",
                x: "0px",
                ease: Elastic.easeOut.config(1, .75)
            })
        })
    };
    var o = function () {
        TweenMax.to(t, 2, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, .75)
        });
        TweenMax.to(t.find("path"), 1, {
            morphSVG: t.data("active"),
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    var i = function () {
        t.off("mousemove.letterMorphParallax");
        t.off("mouseleave.letterMorphParallax")
    };
    return {
        init: a,
        animateIn: o,
        kill: i
    }
}

function initMouseAnimations() {
    var e = function () {
        $_pageHeader.on("mousemove", function (e) {
            var t = $(this);
            var a = e.clientX - _globalViewportW / 2;
            var o = e.clientY - _globalViewportH / 2;
            TweenMax.to(t.find(".letter-wrapper"), .5, {
                x: a * .01,
                y: o * .01
            });
            TweenMax.to(t.find(".title h2"), .75, {
                x: a * .05,
                y: o * .05
            });
            TweenMax.to(t.find(".image-wrapper"), .75, {
                x: a * .02,
                y: o * .02
            })
        });
        $_pageHeader.on("mouseleave", function () {
            var e = $(this);
            TweenMax.to(e.find(".letter-wrapper"), .5, {
                x: 0,
                y: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(e.find(".title h2"), .75, {
                x: 0,
                y: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(e.find(".image-wrapper"), .75, {
                x: 0,
                y: 0,
                ease: Expo.easeOut
            })
        })
    };
    var t = function () {
        $_pageFooter.off("mousemove");
        $_pageHeader.off("mousemove")
    };
    return {
        init: e,
        kill: t
    }
}

function loadingAnimation() {
    var t = $(".loading-blob"),
        e = t.find("svg").clone();
    var a = function () {
        t.css("display", "block");
        TweenMax.set(t, {
            x: _mouseX,
            y: _mouseY
        });
        TweenMax.to(t, 1, {
            scale: 1,
            ease: Elastic.easeOut.config(1, .5)
        });
        TweenMax.to(t.find("svg path"), 1, {
            morphSVG: t.find("svg path").attr("data-morph"),
            ease: Power2.easeOut,
            repeat: -1,
            yoyo: true
        });
        $_window.on("mousemove.loadingAnimation", i)
    };
    var o = function () {
        TweenMax.to(t, 1, {
            scale: 0,
            ease: Elastic.easeOut.config(1, .5),
            onComplete: function () {
                t.css("display", "none");
                TweenMax.set(t, {
                    clearProps: "all"
                });
                TweenMax.killTweensOf(t.find("svg path"));
                TweenMax.set(t.find("svg path"), {
                    clearProps: "all"
                });
                t.find("svg").remove();
                t.append(e.clone());
                $_window.off("mousemove.loadingAnimation")
            }
        })
    };

    function i(e) {
        _mouseX = e.clientX;
        _mouseY = e.clientY;
        TweenMax.to(t, .5, {
            x: _mouseX + 20,
            y: _mouseY + 20,
            ease: Power2.easeOut
        })
    }
    return {
        init: a,
        kill: o
    }
}

function checkInView(e, t, a) {
    if (t = undefined) t = 0;
    if (e.offsetY >= _scrollY + _globalViewportH || e.offsetY + e.height <= _scrollY) return false;
    else return true
}
jQuery.fn.reverse = [].reverse;

function linear(e) {
    return e
}

function easeInQuad(e) {
    return e * e
}

function easeOutQuad(e) {
    return e * (2 - e)
}

function easeOutQuad(e) {
    return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
}

function easeInCubic(e) {
    return e * e * e
}

function easeOutCubic(e) {
    return --e * e * e + 1
}

function easeOutCubic(e) {
    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
}

function easeInQuart(e) {
    return e * e * e * e
}

function easeOutQuart(e) {
    return 1 - --e * e * e * e
}

function easeOutQuart(e) {
    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
}

function easeInQuint(e) {
    return e * e * e * e * e
}

function easeOutQuint(e) {
    return 1 + --e * e * e * e * e
}

function easeOutQuint(e) {
    return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
}

function exponentialOut(e) {
    return e == 1 ? e : 1 - Math.pow(2, -10 * e)
}
norm = function (e, t, a) {
    return (e - t) / (a - t)
};
lerp = function (e, t, a) {
    return (a - t) * e + t
};
map = function (e, t, a, o, i) {
    return lerp(norm(e, t, a), o, i)
};
lerpEase = function (e, t, a) {
    return (1 - a) * e + a * t
};

function cover(e, t, a, o, i) {
    var n = {};
    if (i) {
        var s = Math.min(a / e, o / t);
        n.width = e * s;
        n.height = t * s
    } else {
        n.width = a;
        n.height = t * a / e;
        if (n.height < o) {
            n.width = e * o / t;
            n.height = o
        }
    }
    n.left = Math.round((a - n.width) / 2);
    n.top = Math.round((o - n.height) / 2);
    return n
}
$.fn.popupWindow = function (o) {
    return this.each(function () {
        $(this).click(function () {
            $.fn.popupWindow.defaultSettings = {
                centerBrowser: 0,
                centerScreen: 0,
                height: 500,
                left: 0,
                location: 0,
                menubar: 0,
                resizable: 0,
                scrollbars: 0,
                status: 0,
                width: 500,
                windowName: null,
                windowURL: null,
                top: 0,
                toolbar: 0
            };
            settings = $.extend({}, $.fn.popupWindow.defaultSettings, o || {});
            var e = "height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",location=" + settings.location + ",menuBar=" + settings.menubar;
            settings.windowName = this.name || settings.windowName;
            settings.windowURL = this.href || settings.windowURL;
            var t, a;
            if (settings.centerBrowser) {
                if ($.browser.msie) {
                    t = window.screenTop - 120 + ((document.documentElement.clientHeight + 120) / 2 - settings.height / 2);
                    a = window.screenLeft + ((document.body.offsetWidth + 20) / 2 - settings.width / 2)
                } else {
                    t = window.screenY + (window.outerHeight / 2 - settings.height / 2);
                    a = window.screenX + (window.outerWidth / 2 - settings.width / 2)
                }
                window.open(settings.windowURL, settings.windowName, e + ",left=" + a + ",top=" + t).focus()
            } else if (settings.centerScreen) {
                t = (screen.height - settings.height) / 2;
                a = (screen.width - settings.width) / 2;
                window.open(settings.windowURL, settings.windowName, e + ",left=" + a + ",top=" + t).focus()
            } else {
                window.open(settings.windowURL, settings.windowName, e + ",left=" + settings.left + ",top=" + settings.top).focus()
            }
            return false
        })
    })
};

function callPlayer(a, e, t) {
    if (window.jQuery && a instanceof jQuery) a = a.get(0).id;
    var o = document.getElementById(a);
    if (o && o.tagName.toUpperCase() != "IFRAME") {
        o = o.getElementsByTagName("iframe")[0]
    }
    if (!callPlayer.queue) callPlayer.queue = {};
    var i = callPlayer.queue[a],
        n = document.readyState == "complete";
    if (n && !o) {
        window.console && console.log("callPlayer: Frame not found; id=" + a);
        if (i) clearInterval(i.poller)
    } else if (e === "listening") {
        if (o && o.contentWindow) {
            e = '{"event":"listening","id":' + JSON.stringify("" + a) + "}";
            o.contentWindow.postMessage(e, "*")
        }
    } else if (!n || o && (!o.contentWindow || i && !i.ready) || (!i || !i.ready) && typeof e === "function") {
        if (!i) i = callPlayer.queue[a] = [];
        i.push([e, t]);
        if (!("poller" in i)) {
            i.poller = setInterval(function () {
                callPlayer(a, "listening")
            }, 250);
            s(1, function e(t) {
                if (!o) {
                    o = document.getElementById(a);
                    if (!o) return;
                    if (o.tagName.toUpperCase() != "IFRAME") {
                        o = o.getElementsByTagName("iframe")[0];
                        if (!o) return
                    }
                }
                if (t.source === o.contentWindow) {
                    clearInterval(i.poller);
                    i.ready = true;
                    s(0, e);
                    while (tmp = i.shift()) {
                        callPlayer(a, tmp[0], tmp[1])
                    }
                }
            }, false)
        }
    } else if (o && o.contentWindow) {
        if (e.call) return e();
        o.contentWindow.postMessage(JSON.stringify({
            event: "command",
            func: e,
            args: t || [],
            id: a
        }), "*")
    }

    function s(e, t) {
        var a = e ? window.addEventListener : window.removeEventListener;
        a ? a("message", t, !1) : (e ? window.attachEvent : window.detachEvent)("onmessage", t)
    }
}

function normalizedValue(e, t, a) {
    return Number(((e - a) / (t - a)).toFixed(2))
}

function lockBodySafari() {
    var e = $("html, body"),
        t = $(".scroll-content-wrapper");
    if (window.pageYOffset) {
        _scrollTopMobileSafariFix = window.pageYOffset;
        t.css({
            top: -_scrollTopMobileSafariFix
        })
    }
    e.css({
        height: "100%",
        overflow: "hidden"
    })
}

function unlockBodySafari() {
    var e = $("html, body"),
        t = $(".scroll-content-wrapper");
    e.css({
        height: "",
        overflow: ""
    });
    t.css({
        top: ""
    });
    window.scrollTo(0, _scrollTopMobileSafariFix);
    window.setTimeout(function () {
        _scrollTopMobileSafariFix = null
    }, 0)
}

function disableScroll() {
    if (window.addEventListener) window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    if (window.removeEventListener) window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null
}

function getBrowserInfo() {
    var e = {
        isMobile: false,
        isTablet: false,
        isPhone: false,
        isDesktop: false,
        isPortrait: false,
        isLandscape: false,
        isSafari: false,
        isIE: false,
        isEdge: false,
        isChrome: false,
        isFirefox: false,
        isRetina: false,
        pixelRatio: 1,
        type: "",
        browser: ""
    };
    if ($("body").hasClass("mobile")) {
        e.isMobile = true;
        if ($("body").hasClass("phone")) {
            e.isPhone = true;
            e.type = "phone"
        } else {
            e.type = "tablet";
            e.isTablet = true
        }
        if ($("html").hasClass("firefox")) {
            e.browser = "firefox";
            e.isFirefox = true
        } else if ($("html").hasClass("chrome")) {
            e.browser = "chrome";
            e.isChrome = true
        } else if ($("html").hasClass("safari")) {
            e.browser = "safari";
            e.isSafari = true
        } else e.browser = "unknown"
    } else {
        e.type = "desktop";
        e.isDesktop = true;
        if ($("html").hasClass("firefox")) {
            e.browser = "firefox";
            e.isFirefox = true
        } else if ($("html").hasClass("chrome")) {
            e.browser = "chrome";
            e.isChrome = true
        } else if ($("html").hasClass("safari")) {
            e.browser = "safari";
            e.isSafari = true
        } else if ($("html").hasClass("ie")) {
            e.browser = "ie";
            e.isIE = true
        } else if ($("html").hasClass("edge")) {
            e.browser = "edge";
            e.isEdge = true
        } else e.browser = "unknown"
    }
    if ($("html").hasClass("orientation_landscape")) e.isLandscape = true;
    if ($("html").hasClass("orientation_portrait")) e.isPortrait = true;
    e.pixelRatio = window.devicePixelRatio;
    if (e.pixelRatio >= 2) e.isRetina = true;
    return e
}

function buroParallaxScroll() {
    var e = document.querySelectorAll("[data-parallax]");
    var i = [];
    var t = function () {
        e.forEach(function (e, t) {
            var a = {};
            a.element = e;
            a.friction = Number(e.dataset.friction);
            a.height = e.offsetHeight;
            a.offsetY = e.getBoundingClientRect().top;
            i.push(a)
        });
        window.addEventListener("resize", o)
    };
    var a = function (e) {
        for (var t = 0, a = i.length; t < a; t++) {
            if (e + _globalViewportH > i[t].offsetY && e + _globalViewportH < i[t].offsetY + i[t].height + _globalViewportH) {
                if ($_body.hasClass("wine-advice")) {
                    TweenMax.to(i[t].element, 1, {
                        y: -e * i[t].friction * .5,
                        ease: Power4.easeOut
                    })
                } else {
                    var o = e + _globalViewportH - i[t].offsetY;
                    if (i[t].offsetY < _globalViewportH) o -= _globalViewportH;
                    if (o < 0) o = 0;
                    TweenMax.to(i[t].element, 1, {
                        y: -o * i[t].friction * .5,
                        ease: Power4.easeOut
                    })
                }
            }
        }
    };
    var o = function () {
        i.forEach(function (e, t) {
            e.height = e.element.offsetHeight;
            e.offsetY = e.element.getBoundingClientRect().top + _buroScroll.getStatus().scrollVal
        })
    };
    var n = function () {
        window.removeEventListener("resize", o)
    };
    return {
        init: t,
        update: a,
        kill: n
    }
}
$(document).ready(function () {
    outdatedBrowser({
        bgColor: "#f25648",
        color: "#fff",
        lowerThan: "boxShadow",
        languagePath: ""
    });
    window.fbAsyncInit = function () {
        FB.init({
            appId: "241114143086285",
            autoLogAppEvents: true,
            cookie: true,
            xfbml: true,
            version: "v2.10"
        });
        FB.AppEvents.logPageView()
    };
    (function (e, t, a) {
        var o, i = e.getElementsByTagName(t)[0];
        if (e.getElementById(a)) {
            return
        }
        o = e.createElement(t);
        o.id = a;
        o.src = "//connect.facebook.net/en_US/sdk.js";
        i.parentNode.insertBefore(o, i)
    })(document, "script", "facebook-jssdk");
    Modernizr.addTest("backgroundcliptext", function () {
        var e = document.createElement("div");
        e.style.cssText = Modernizr._prefixes.join("background-clip:text;");
        return !!e.style.cssText.replace(/\s/g, "").length
    });
    Modernizr.addTest("object-fit", !!Modernizr.prefixed("objectFit"));
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1 || navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        var e = ["%c Made by Büro %c https://burocratik.com %c 🤘 %c\n", "color: #fff; background: #0020f4; padding:5px 0;", "color: #fff; background: #242424; padding:5px 0 5px 5px;", "background: #242424; padding:5px 0", "background: #242424; padding:5px 5px 5px 0"];
        window.console.log.apply(console, e)
    } else {
        window.console && window.console.log("Made by Büro - https://burocratik.com")
    }
});

function loadPages(s, e, t) {
    var a = $(".page-main.page-current"),
        r = $(".page-main.page-next");
    $("html,body").addClass("fixed-all");
    $_body.removeClass("js-no-ajax");
    $_body.addClass("js-loading-page");
    randomSentenceTransition();
    var l = Date.now();
    var o = $(".main-transition"),
        i = Math.floor(Math.random() * $(".bg-transition-new svg").not(".main-transition").length - 1) + 1;
    $randomSvg = $(".bg-transition-new svg:not(.main-transition)").eq(i), new_body_class = t, d = $randomSvg.find("path").attr("d"), data_morph = $randomSvg.find("path").attr("data-morph"), data_final_morph = $randomSvg.find("path").attr("data-final-morph");
    o.find("path").attr("d", d);
    o.find("path").attr("data-morph", data_morph);
    o.find("path").attr("data-final-morph", data_final_morph);
    o.attr("data-timing", $randomSvg.attr("data-timing"));
    $(".bg-transition-new").addClass(new_body_class);
    if (verge.inViewport($_pageFooter) && (new_body_class == "fazemos" || new_body_class == "queremos" || new_body_class == "noticias" || new_body_class == "home" || new_body_class == "single-service")) $(".bg-transition-new").addClass("alternative-color");
    $(".bg-transition-new").css("display", "block");
    var c = Number($(".bg-transition-new svg").attr("data-timing"));
    TweenMax.killAll();
    if ($_body.hasClass("mobile")) {
        TweenMax.to($(".loading-mobile .loading-bg"), 2, {
            x: "0%",
            ease: Expo.easeOut,
            onComplete: function () {
                $(".loading-mobile").remove()
            }
        })
    }
    TweenMax.to($(".bg-transition-new .main-transition path"), c, {
        morphSVG: $(".bg-transition-new .main-transition path").attr("data-morph"),
        ease: Expo.easeOut,
        onComplete: function () {}
    });
    TweenMax.fromTo($(".bg-transition-new h2"), 1, {
        y: "100px",
        opacity: 0
    }, {
        y: "0px",
        opacity: 1,
        delay: .5,
        ease: Power4.easeOut
    });
    r.load(s + " .page-toload", function (e, t, a) {
        var o = $(this);
        if (!o.html()) {
            window.location = s;
            return false
        }
        var i = Date.now();
        var n = c * 500 - (i - l);
        if (n < 0) n = 0;
        $.doTimeout(n, function () {
            _loadingBlob.kill();
            if (_currentView) {
                _currentView.kill();
                _currentView = null
            }
            $_headerMain.find(".desktop-language .other-languages").html($(e).find(".desktop-language .other-languages li"));
            $_headerMain.find("#nav-main-mobile .other-languages").html($(e).find("#nav-main-mobile .other-languages li"));
            $(".page-next .preload").imagesLoaded(function (e, t, a) {
                var o = $(this).imagesLoaded();
                o.always(function () {
                    if (r.find(".page-toload").attr("data-bodyClass").split(" ")[0] == "single-service") var e = 1;
                    else var e = .5 + 1;
                    $.doTimeout(1e3 + e * 1e3, function () {
                        $(".bg-transition-new").css("display", "none");
                        $(".bg-transition-new").removeClass(new_body_class).removeClass("alternative-color").removeClass("somos").removeClass("estamos").removeClass("queremos").removeClass("single-queremos").removeClass("single-service").removeClass("home").removeClass("noticias").removeClass("single-noticias")
                    });
                    TweenMax.to($(".bg-transition-new .main-transition path"), c, {
                        morphSVG: $(".bg-transition-new .main-transition path").attr("data-final-morph"),
                        ease: Expo.easeOut,
                        delay: e,
                        onComplete: function () {
                            TweenMax.set($(".bg-transition-new .main-transition path"), {
                                morphSVG: $(".bg-transition-new .main-transition path").attr("data-original")
                            })
                        }
                    });
                    $_headerMain.css({
                        top: "0px"
                    });
                    TweenMax.set($_headerMain, {
                        y: "0px"
                    });
                    $_headerMain.removeClass("js-drop");
                    manageBodyClasses();
                    clearPagesAfterloading(0);
                    $_pageHeader = $(".page-next .page-header");
                    $_pageFooter = $(".page-next .page-footer");
                    $_pageContent = $(".page-next .page-content");
                    $_pageToLoad = $(".page-next .page-toload");
                    $("#nav-main").find("li").removeClass("active");
                    $("#nav-main").find("li." + $_pageToLoad.attr("data-bodyClass") + "").addClass("active");
                    if ($_headerMain.hasClass("js-drop")) {
                        $_headerMain.removeClass("js-drop")
                    }
                    TweenMax.to($_headerMain, 3, {
                        y: 0,
                        force3D: true,
                        ease: Expo.easeOut
                    });
                    setupDomElements(r.find(".page-toload").attr("data-bodyClass").split(" ")[0]);
                    TweenMax.to($(".bg-transition-new h2"), c / 4, {
                        y: "-100px",
                        opacity: 0,
                        delay: e,
                        ease: Power4.easeOut
                    })
                })
            })
        })
    });
    return
}

function clearPagesAfterloading(e) {
    var t = $(".page-main.page-current"),
        a = $(".page-main.page-next");
    $.doTimeout(e, function () {
        t.remove();
        a.removeClass("page-next");
        a.addClass("page-current").removeAttr("aria-hidden");
        var e = $(".page-main.page-current");
        e.after('<div class="page-main page-next" aria-hidden="true"></div>');
        onStartPageWhenRefresh(false);
        e.attr("style", "");
        window.scrollTo(0, 0);
        $("html,body").scrollTop(0)
    })
}

function onStartPageWhenRefresh(e) {
    if (e) {
        window.scrollTo(0, 0);
        $("html,body").scrollTop(0);
        $("html,body").addClass("fixed-all");
        $_loadingPage.addClass("js-loading-page");
        $_body.removeClass("js-byrefresh");
        manageBodyClasses();
        $_toPreload.imagesLoaded(function (e, t, a) {
            var o = $(this).imagesLoaded();
            o.always(function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 100);
                if ($_html.hasClass("no-object-fit")) {
                    var e = $(".page-current .element-cover");
                    resizeLikeCover(e)
                }
                randomSentenceTransition();
                setupDomElements($_pageToLoad.attr("data-bodyClass").split(" ")[0]);
                TweenMax.to($_loadingPage, .6, {
                    opacity: 0,
                    ease: Power2.easeInOut,
                    onComplete: function () {
                        $("html,body").removeClass("fixed-all");
                        $_loadingPage.removeClass("js-loading-page").hide();
                        onStartPage()
                    }
                })
            })
        })
    } else {
        onStartPage()
    }
}

function onStartPage() {
    var e, t, a, o, i, n, s, r;
    _global_allowNavigate = true;
    $("html,body").removeClass("fixed-all");
    $_body.removeClass("js-loading-page");
    window.cancelAnimationFrame(_raf_loop_id);
    window.cancelAnimationFrame(_raf_main_id);
    if (_customScroll != null) {
        _customScroll.update();
        _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
    }
    if ($_scrollContentWrapper.attr("data-scrollbar") != undefined && !$_scrollContentWrapper.hasClass("js-scroll")) {
        _customScroll = Scrollbar.init($_scrollContentWrapper[0], {
            speed: 1,
            syncCallbacks: true
        });
        $_scrollContentWrapper.addClass("js-scroll")
    }
    if (_customScroll != null) {
        $(".loading-container").css({
            top: 0
        });
        _customScroll.setPosition(0, 0);
        _customScroll.removeListener(_page_scroll_listener)
    }
    $_pageHeader = $(".page-current .page-header");
    $_pageFooter = $(".page-current .page-footer");
    $_pageContent = $(".page-current .page-content");
    $_pageToLoad = $(".page-current .page-toload");
    $("html,body").removeClass("fixed-all");
    $_body.removeClass("js-loading-page");
    callAsyncFunctions();
    if (_currentView) _currentView.kill();
    switch ($_pageToLoad.attr("data-bodyClass").split(" ")[0]) {
        case "home":
            _currentView = homePage();
            _currentView.init();
            break;
        case "somos":
            _currentView = somosPage();
            _currentView.init();
            break;
        case "fazemos":
            _currentView = fazemosPage();
            _currentView.init();
            break;
        case "estamos":
            _currentView = estamosPage();
            _currentView.init();
            break;
        case "queremos":
            _currentView = queremosPage();
            _currentView.init();
            break;
        case "single-queremos":
            _currentView = singleQueremosPage();
            _currentView.init();
            break;
        case "single-service":
            _currentView = singleServicePage();
            _currentView.init();
            break;
        case "noticias":
            _currentView = noticiasPage();
            _currentView.init();
            break;
        case "four04":
            _currentView = four04Page();
            _currentView.init();
            break
    }
    initGlobalAnimations();
    var l = window.location.hash;
    if (l != "") {
        var c = $("" + l + "");
        $.doTimeout(1e3, function () {
            if (_customScroll) _customScroll.scrollTo(0, $(l).offset().top, 2e3);
            else goTo(c, 1500, [.7, 0, .3, 1], 0)
        })
    }
    if ($_html.hasClass("no-object-fit")) {
        var f = $(".page-current .element-cover");
        resizeLikeCover(f)
    }
}

function startModal() {
    var o = $("#modal-bg"),
        i = $("#modal-wrapper"),
        n = $("#modal-content"),
        e = $(".btn-open-modal"),
        s = "",
        r = "";
    $(document).on("click", ".btn-open-modal", function (e) {});
    $(document).on("click", "#lightbox .btn-close-modal", function (e) {
        if ($_body.hasClass("js-no-ajax")) return;
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        t(s, r)
    });
    $(document).on("contextmenu", ".btn-brand-guides", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var t = $(this),
            a = " — Affinity - Nearshore | IT Consulting | Software Development";
        s = window.location.pathname;
        r = $("head title").text();
        var o = t.attr("data-url-brandAjax"),
            i = t.attr("data-url-brand"),
            n = t.attr("data-title-brand") + a;
        $("head title").html(n);
        if (_global_allowNavigate) {
            l(o, s, r)
        }
        return false
    });

    function l(a, e, t) {
        _global_allowNavigate = false;
        $_body.addClass("js-loading-page");
        i.addClass("js-on");
        _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
        _customScrollModal = Scrollbar.init($("#modal-wrapper")[0], {
            syncCallbacks: true
        });
        $("#modal-wrapper").css({
            top: _customScroll.offset.y + "px"
        });
        _customScrollModal.addListener(function (e) {
            $(".btn-close-modal").css({
                top: e.offset.y + "px"
            })
        });
        TweenMax.set(n, {
            scale: .7,
            opacity: 0
        });
        TweenMax.set(o, {
            opacity: 0
        });
        n.load(a + " .toload", function () {
            var e = $(this);
            $_body.removeClass("js-no-ajax ");
            if (!e.html()) {
                window.location = a;
                return false
            }
            $("html,body").addClass("js-modal-open");
            $_body.removeClass("js-loading-page");
            ga("send", "pageview", window.location.pathname);
            var t = $("#modal-content .toload img:eq(0)").imagesLoaded();
            t.always(function (e) {
                TweenMax.to(n, .3, {
                    scale: 1,
                    opacity: 1,
                    delay: .05,
                    ease: Expo.easeOut
                });
                TweenMax.to(o, .8, {
                    opacity: .8,
                    ease: Expo.easeOut
                })
            });
            $("#lightbox").on("clickoutside", function (e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                $("#lightbox .btn-close-modal").click()
            });
            _global_allowNavigate = true
        })
    }

    function t(e, t) {
        history.replaceState({}, t, e);
        i.removeClass("js-on");
        $("#modal-wrapper").scrollTop(0);
        $("head title").html(t);
        $("html,body").removeClass("js-modal-open");
        $("#lightbox").remove();
        _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/);
        _customScrollModal.removeListener();
        Scrollbar.destroy($("#modal-wrapper")[0]);
        return false
    }
}

function mainNavigation() {
    var e = $(".language-wrapper"),
        t = e.find(".active-language"),
        a = $(".hamb-menu"),
        o = $(".close-hamb-menu"),
        i = $(".outside-overlay"),
        n = e.find(".other-languages");
    $_headerMain.find(".main-logo a").on("click", function () {
        $_headerMain.find("#nav-main li").removeClass("active");
        $_headerMain.find("#nav-main-mobile li").removeClass("active")
    });
    $_headerMain.find("#nav-main li a").on("click", function () {
        var e = $(this);
        if (e.closest("li").hasClass("active") && (!$_body.hasClass("single-service") && !$_body.hasClass("single-queremos"))) return false
    });
    $_headerMain.find("#nav-main-mobile li a").on("click", function () {
        var e = $(this);
        $.doTimeout(800, function () {
            if (e.closest("li").hasClass("active") && (!$_body.hasClass("single-service") && !$_body.hasClass("single-queremos"))) return false;
            $_headerMain.find("#nav-main-mobile li").removeClass("active");
            e.closest("li").addClass("active")
        })
    });
    a.on("click", function () {
        $_body.addClass("js-nav-mobile-open");
        $("#header-main").css("overflow-x", "inherit");
        window.viewportUnitsBuggyfill.refresh();
        if (!$_html.hasClass("safari")) {
            $("body, html").css("overflow", "hidden")
        }
        disableScroll()
    });
    o.on("click", function () {
        $_body.removeClass("js-nav-mobile-open");
        $.doTimeout(800, function () {
            $("#header-main").css("overflow-x", "")
        });
        if (!$_html.hasClass("safari")) {
            $("body, html").css("overflow", "")
        }
        enableScroll()
    });
    i.on("click", function () {
        o.click()
    });
    if (!$_body.hasClass("mobile")) {
        $(document).on("mouseenter", ".language-wrapper", function () {
            $_body.addClass("js-language-open");
            if ($_headerMain.hasClass("js-drop")) {
                $_headerMain.addClass("increaseHeight")
            }
            TweenMax.fromTo(e.find(".arrow"), .25, {
                y: "0px"
            }, {
                y: "2px",
                onComplete: function () {
                    TweenMax.fromTo(e.find(".arrow"), .25, {
                        y: "2px"
                    }, {
                        y: "0px",
                        clearProps: "all"
                    })
                }
            });
            TweenMax.set(e, {
                overflow: "visible"
            });
            TweenMax.to(n, .5, {
                autoAlpha: 1
            })
        }).on("mouseleave", ".language-wrapper", function () {
            $_body.removeClass("js-language-open");
            if ($_headerMain.hasClass("js-drop")) {
                $_headerMain.removeClass("increaseHeight")
            }
            TweenMax.to(n, .25, {
                autoAlpha: 0,
                onComplete: function () {
                    TweenMax.set(e, {
                        clearProps: "all"
                    })
                }
            })
        })
    } else {
        t.on("click", function () {
            $_body.addClass("js-language-open");
            TweenMax.fromTo(e.find(".arrow"), .25, {
                y: "0px"
            }, {
                y: "2px",
                onComplete: function () {
                    TweenMax.fromTo(e.find(".arrow"), .25, {
                        y: "2px"
                    }, {
                        y: "0px",
                        clearProps: "all"
                    })
                }
            });
            TweenMax.to(n, .5, {
                autoAlpha: 1
            })
        });
        $_pageHeader.on("click", function () {
            if ($_body.hasClass("js-language-open")) {
                $_body.removeClass("js-language-open");
                TweenMax.to(n, .25, {
                    autoAlpha: 0,
                    onComplete: function () {
                        TweenMax.set(e, {
                            clearProps: "all"
                        })
                    }
                })
            }
        })
    }
    globalStickyHeader()
}

function initGlobalAnimations() {
    if (!$_body.hasClass("mobile")) {
        if (_viewportAnimations) _viewportAnimations.kill();
        if (_scrollAnimations) _scrollAnimations.kill();
        if (_mouseAnimations) _mouseAnimations.kill();
        _viewportAnimations = initViewportAnimations();
        _viewportAnimations.init();
        _scrollAnimations = initScrollAnimations();
        _scrollAnimations.init();
        _mouseAnimations = initMouseAnimations();
        _mouseAnimations.init()
    }
    if (_customScroll == null) _scrollLimit = $_html.height();
    else _scrollLimit = _customScroll.limit.y;
    _raf_main_id = _rAF_loop(t);
    t();

    function t() {
        _raf_main_id = _rAF_loop(t);
        if (_customScroll == null) {
            _scrollY = window.pageYOffset;
            var e = {
                offset: {
                    y: -1
                }
            };
            e.offset.y = window.pageYOffset
        } else {
            _scrollY = _customScroll.offset.y
        }
        if (_lastScroll != _scrollY && _scrollY != 0 && !_blockAll) {
            if (_lastScroll < _scrollY) _scrollDirection = "down";
            else _scrollDirection = "up";
            _lastScroll = _scrollY;
            if (!$_body.hasClass("mobile")) _scrollAnimations.update()
        }
    }
}
$(document).ready(function () {
    if ($(window).width() < 1024) $("body").addClass("mobile");
    $_window = $(window), $_body = $("body"), $_html = $("html"), $_mainPage = $(".page-main"), $_btn_nav_main = $(".btn-nav-main");
    $_scrollContentWrapper = $(".scroll-content-wrapper"), $_headerMain = $("#header-main");
    $_currentPage = $(".page-main.page-current"), $_toPreload = $(".preload"), $_loadingPage = $("#loading-page");
    $_pageHeader = $(".page-current .page-header");
    $_pageFooter = $(".page-current .page-footer");
    $_pageContent = $(".page-current .page-content");
    $_pageToLoad = $(".page-current .page-toload");
    _currentView = null;
    PIXI.utils.skipHello();
    calculateGlobalValues();
    _global_allowNavigate = false;
    _server_hostname = document.location.origin;
    _page_scroll_listener = null;
    _scrollTopMobileSafariFix = null;
    _customScroll = null, _customScrollBlockBrands = null, _lastScroll = -1;
    _scrollY = 0;
    _scrollLimit = 1;
    _scrollDirection = "down";
    _blockAll = false;
    _pageTransition = null;
    _viewportAnimations = null;
    _scrollAnimations = null;
    _mouseAnimations = null;
    _clickAnchorContacts = false;
    _mouseX = 0;
    _mouseY = 0;
    _loadingBlob = loadingAnimation();
    _browserObj = getBrowserInfo();
    if ($_body.hasClass("mobile") || $_html.hasClass("ie") || $_html.hasClass("edge")) {
        $(".scroll-content-wrapper").removeAttr("data-scrollbar")
    }
    if ($_scrollContentWrapper.attr("data-scrollbar") != undefined && !$_scrollContentWrapper.hasClass("js-scroll")) {
        $_body.css({
            overflow: "hidden"
        });
        $_html.css({
            overflow: "hidden"
        });
        _customScroll = Scrollbar.init($_scrollContentWrapper[0], {
            speed: 1,
            syncCallbacks: true
        });
        $_scrollContentWrapper.addClass("js-scroll")
    }
    _rAF_loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    };
    _cancel_rAF_loop = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    _raf_loop_id = null;
    _raf_main_id = null;
    onStartPageWhenRefresh(true);
    mainNavigation();
    callAsyncFunctions();
    startModal();
    window.viewportUnitsBuggyfill.init();
    FastClick.attach(document.body);
    var e = window.location.host;
    var l = " — Affinity - Nearshore | IT Consulting | Software Development",
        c = $("a").attr("data-title-home");
    _forPopstate = true;
    $_linkInternal = $('a[href*="' + e + '"]');
    $(document).on("click", 'a[data-remote="true"]', function () {
        var e = $(this),
            t = e.attr("data-title");
        if (!$_html.hasClass("edge") && !$_html.hasClass("ie") && !$_body.hasClass("mobile")) {
            _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/)
        }
        if (!_global_allowNavigate) return false;
        _global_allowNavigate = false;
        if (e.hasClass("modal") || e.hasClass("js-no-transPage")) return;
        _loadingBlob.init();
        var a = e.attr("href"),
            o = e.attr("data-title"),
            i = a,
            n = i,
            s = o + l,
            r = window.location.search;
        if (!o) {
            s = c
        }
        if ($_body.hasClass("queremos")) {
            n = n + r;
            i = a + r
        }
        if (_forPopstate) {
            history.pushState({}, s, n)
        }
        _forPopstate = true;
        $("head title").html(s);
        ga("send", "pageview", window.location.pathname);
        if ("ga" in window) {
            tracker = ga.getAll()[0];
            if (tracker) {
                tracker.send("pageview", window.location.pathname)
            }
        }
        if ($_body.hasClass("mobile")) {
            $_body.prepend("<span class='loading-mobile'><span class='loading-bg'></span></span>");
            TweenMax.to($(".loading-mobile .loading-bg"), 2, {
                x: "-30%",
                ease: Expo.easeInOut
            })
        }
        if ($_body.hasClass("js-nav-mobile-open")) {
            $(".close-hamb-menu").click();
            $.doTimeout(800, function () {
                loadPages(i, "default", e.attr("data-targetClass"))
            })
        } else {
            loadPages(i, "default", e.attr("data-targetClass"))
        }
        return false
    });
    if (window.addEventListener) {
        window.addEventListener("popstate", function (e) {
            if ($_html.hasClass("mobile")) return false;
            if (!e.state) {
                _forPopstate = true;
                return false
            }
            _forPopstate = false;
            window.location = window.location;
            return false
        })
    }
    $(document).on("click", "a[rel=external]", function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        var t = window.open($(this).attr("href"));
        return t.closed
    });
    $("a[rel=print]").click(function () {
        var e = window.print();
        return false
    });
    $("a.email").each(function () {
        var e = $(this).text().replace("[-at-]", "@");
        $(this).text(e);
        $(this).attr("href", "mailto:" + e)
    });
    $("input[type=text], input[type=email], input.text, input.email, textarea").each(function () {
        if (!$(this).hasClass("txtClear")) return;
        var e = this.defaultValue;
        $(this).focus(function () {
            if ($(this).val() == e) {
                $(this).val("")
            }
        });
        $(this).blur(function () {
            if ($(this).val() == "") {
                $(this).val(e)
            }
        })
    });
    $(document).on("click", ".newWindow", function () {
        event.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();
        var e = window.open($(this).attr("href"), "", "height=480,width=560");
        if (window.focus) {
            e.focus()
        }
        return false
    });
    $(document).on("keydown", function (e) {
        switch (e.which) {
            case 40:
                break;
            case 38:
                break;
            case 39:
                break;
            case 37:
                break;
            case 27:
                if ($_body.hasClass("js-modal-open")) {
                    $("#lightbox .btn-close-modal").click()
                }
                if ($_body.hasClass("is-fullvideo-open")) {
                    $(".home-fullvideos-container .elastic-btn").click()
                }
                default:
                    break
        }
    });
    $_window.on("resize", $.debounce(500, function () {
        calculateGlobalValues();
        _browserObj = getBrowserInfo();
        $(".js-title-element").each(function (e) {
            var t = $(this);
            t.parent(".overflow-wrap").css({
                height: t.height() + 15,
                marginBottom: t.css("marginBottom")
            })
        });
        if ($(window).width() < 1024) {
            if (!$("body").hasClass("mobile") && !$("body").hasClass("tablet") && !$("body").hasClass("phone")) {
                $("body").addClass("mobile");
                location.reload()
            }
        } else {
            if ($("body").hasClass("mobile") && !$("body").hasClass("tablet") && !$("body").hasClass("phone")) {
                $("body").removeClass("mobile");
                location.reload()
            }
        }
        if ($("body").hasClass("fazemos") && !$("body").hasClass("mobile")) location.reload();
        if ($_html.hasClass("no-object-fit")) {
            var e = $(".page-current .element-cover");
            resizeLikeCover(e)
        }
    }));
    $_window.on("mousemove", $.debounce(50, function (e) {
        _mouseX = e.clientX;
        _mouseY = e.clientY
    }));
    window.addEventListener("orientationchange", function () {
        $.doTimeout(500, function () {
            _browserObj = getBrowserInfo()
        })
    })
});

function submitJSON(e, t, a, o) {
    $.ajax({
        data: {
            action: e,
            value: t
        },
        type: "post",
        dataType: "json",
        url: _server_hostname + "/wp-admin/admin-ajax.php",
        success: function (e) {
            a(e)
        },
        error: function (e) {
            o(e)
        }
    })
}

function submitForm(t) {
    if (validateForm(t) && !t.hasClass("sending")) {
        t.addClass("sending");
        $.ajax({
            data: t.serialize(),
            type: "post",
            dataType: "json",
            url: _server_hostname + "/wp-admin/admin-ajax.php",
            success: function (e) {
                t.removeClass("sending")
            },
            error: function (e) {
                t.removeClass("sending")
            }
        })
    }
}

function submitFormData(e, t, a) {
    $.ajax({
        data: e,
        type: "post",
        contentType: false,
        processData: false,
        url: _server_hostname + "/wp-admin/admin-ajax.php",
        success: function (e) {
            t(e)
        },
        error: function (e) {
            a(e)
        }
    })
}

function calculateGlobalValues() {
    _globalViewportW = verge.viewportW();
    _globalViewportH = verge.viewportH();
    _globalHalfViewportH = (_globalViewportH / 2).toFixed(0)
}

function callAsyncFunctions() {
    if (window.respimage) respimage()
}

function getRandomInt(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
}

function manageBodyClasses() {
    if ($_body.hasClass("js-no-ajax")) {
        $_body.addClass($(".page-main.page-current .page-toload").attr("data-bodyClass"))
    } else {
        $_body.removeClass($(".page-main.page-current .page-toload").attr("data-bodyClass"));
        $_body.addClass($(".page-main.page-next .page-toload").attr("data-bodyClass"))
    }
}

function estamosPage(e) {
    if ($_body.hasClass("js-no-ajax")) {
        var t = 0,
            a = 1
    } else {
        var t = .5,
            a = 1.5
    }
    var o = animateRollingLetters(),
        i = textFireworks({
            element: $(".page-header h2"),
            animationType: "jellyType",
            delay: t
        }),
        n = textFireworks({
            element: $(".page-header h3"),
            animationType: "smoothEntrance",
            delay: a
        }),
        s = textFireworks({
            element: $(".page-footer h2"),
            animationType: "smoothEntrance",
            delay: 0,
            setupArgs: {
                yValue: 100,
                animationTime: .4
            }
        }),
        r = textFireworks({
            element: $(".page-footer h3"),
            animationType: "smoothEntrance",
            delay: .3,
            setupArgs: {
                yValue: 40,
                animationTime: .8
            }
        }),
        l = headerParallax($(".page-header")),
        c = new GlAnimation({
            title: "contact",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: 1,
            objLetter_ScaleDesktop: .9,
            objGroupX_desktop: -10.5,
            objGroupY_desktop: .5,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: 1,
            objLetter_ScaleMaxDesktop: .9,
            objGroupX_MaxDesktop: -4.5,
            objGroupY_MaxDesktop: .5,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: 1,
            objLetter_ScaleBigDesktop: .9,
            objGroupX_bigDesktop: -8.5,
            objGroupY_bigDesktop: .5,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.15,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: 1,
            mouseInfluence: .65
        });
    var f = $(".rotate-title h2"),
        d = $(".map-wrapper .map-svg"),
        p = $(".morphing-letter"),
        u = $(".page-footer"),
        h = $(".map-wrapper"),
        m = $(".svg-scale");
    var g = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(T)
            };
            $_window.on("scroll.estamosPage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                T(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        $_body.detach(".rotate-title-fixed");
        f.each(function () {
            var e = $(this);
            e.css("height", e.closest(".container").outerHeight() + "px")
        });
        y();
        _();
        elasticButtonsInputs();
        initForm($(".contact-form"));
        b();
        x();
        statisticsAnimation();
        if (!_browserObj.isMobile) {
            if (_clickAnchorContacts) {
                _clickAnchorContacts = false;
                if (!_browserObj.isEdge && !_browserObj.isIE) {
                    _customScroll.scrollTo(0, $(".form-container").offset().top, 2e3)
                } else {
                    $("html, body").animate({
                        scrollTop: $(".form-container").offset().top
                    }, 800)
                }
            }
            s.init();
            r.init();
            c.init(function () {
                $.doTimeout(1e3, function () {
                    i.init();
                    n.init(function () {
                        c.playContactAnimation()
                    })
                })
            });
            o.init();
            if (!$_html.hasClass("safari")) {
                animateMorphLetters()
            }
            TweenMax.to($_body.find(".main-logo"), .5, {
                opacity: 1
            });
            TweenMax.to($_body.find(".language-wrapper"), .5, {
                opacity: 1
            });
            TweenMax.staggerTo($_pageHeader.find("h2 .char"), 1.8, {
                y: "0px",
                opacity: 1,
                ease: Power2.easeInOut,
                delay: .5
            }, .05, function () {
                TweenMax.staggerTo($_pageHeader.find("h2 .char"), 3, {
                    y: "5px",
                    yoyo: true,
                    repeat: -1,
                    ease: Sine.easeInOut
                }, .25)
            });
            hoverLinksMenu();
            TweenMax.set(h, {
                opacity: 0
            })
        } else {
            if (_clickAnchorContacts) {
                _clickAnchorContacts = false;
                setTimeout(function () {
                    window.scrollTo(0, $(".form-container").offset().top)
                }, 1500)
            }
        }
    };
    var w = function () {
        if (!$_body.hasClass("mobile")) {
            l.kill();
            o.kill();
            i.kill();
            n.kill();
            s.kill();
            r.kill();
            if (c) c.kill()
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.estamosPage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };

    function v() {
        $(".form-options li").click(function () {
            var e = $(this).attr("data-target");
            $(".form-options li").removeClass("active");
            $(this).addClass("active");
            $(".know-about-affinity").css("display", "none");
            $(".affinity-player").css("display", "none");
            $(".start-project").css("display", "none");
            $("." + e + "").css("display", "block");
            $("." + e + ".flex").css("display", "flex");
            $(".contact-form").attr("data-type", e)
        });
        $(".project-management .option-wrapper").on("click", function () {
            var e = $(this),
                t = e.attr("data-city");
            $(".option-wrapper").removeClass("done");
            TweenMax.to($(".option-wrapper").find(".stroke"), 1, {
                fill: "#006cfc",
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to($(".option-wrapper").find(".full"), 1, {
                opacity: 0,
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to($(".option-wrapper").find(".dash"), 1, {
                strokeDashoffset: 23,
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to(e.find(".full"), 1, {
                opacity: 1,
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to(e.find(".dash"), 1, {
                strokeDashoffset: 0,
                ease: Elastic.easeOut.config(1, .7)
            });
            e.addClass("done");
            $("#location").attr("data-final-city", t)
        });

        function e() {
            var e = document.getElementById("file-upload"),
                t = document.getElementById("file-drag");
            e.addEventListener("change", a, false)
        }

        function a(e) {
            var t = e.target.files || e.dataTransfer.files;
            for (var a = 0, o; o = t[a]; a++) {
                i(o)
            }
        }

        function i(t) {
            var a = new XMLHttpRequest,
                e = 5096;
            if (a.upload) {
                if (t.size <= e * 1024 && t.type == "application/pdf") {
                    a.onreadystatechange = function (e) {
                        if (a.readyState == 4) {
                            encodeURI(t.name);
                            $(".file-container span").html("" + encodeURI(t.name) + "")
                        }
                    };
                    a.open("POST", document.querySelector(".contact-form").action, true);
                    a.setRequestHeader("X-File-Name", t.name);
                    a.setRequestHeader("X-File-Size", t.size);
                    a.setRequestHeader("Content-Type", "multipart/form-data");
                    a.send(t)
                }
            }
        }
        if (window.File && window.FileList && window.FileReader) {
            e()
        } else {
            document.getElementById("file-drag").style.display = "none"
        }
    }
    v();

    function b() {
        var e = JSON.parse(d.attr("data-activecountries"));
        var t = [];
        for (var a = 0; a < e.length; a++) {
            t.push($("#" + e[a] + "")[0].getAttribute("title"))
        }
        if (!$_body.hasClass("mobile")) {
            for (var o = 0, i = e.length; o < i; o++) {
                var n = tippy("#" + e[o] + "", {
                    arrow: true,
                    content: "" + t[o] + "",
                    trigger: "mouseenter",
                    theme: "map-tooltip"
                })
            }
        } else {
            for (var o = 0, i = e.length; o < i; o++) {
                var n = tippy("#" + e[o] + "", {
                    arrow: true,
                    content: "" + t[o] + "",
                    trigger: "click",
                    theme: "map-tooltip"
                })
            }
            return
        }
        setTimeout(function () {
            for (var e = 0; e < document.querySelectorAll(".point").length; e++) {
                var t = document.querySelectorAll(".point")[e];
                var a = document.createElement("span");
                $(a).addClass("fake-point").addClass(t.getAttribute("title"));
                $(a).css({
                    top: t.getBoundingClientRect().top - h.offset().top,
                    left: t.getBoundingClientRect().left
                });
                h.append(a);
                if (t.getAttribute("title") == "Portugal") {
                    $(".fake-shadow").css({
                        top: t.getBoundingClientRect().top - h.offset().top,
                        left: t.getBoundingClientRect().left
                    })
                }
            }
        }, 1e3)
    }

    function x() {
        var e = JSON.parse(d.attr("data-activecountries"));
        for (var t = 0, a = e.length; t < a; t++) {
            d.find("#" + e[t]).show()
        }
    }

    function _() {
        var e = $(".team-person-container");
        e.on("mousemove", function (e) {
            var t = $(this).find(".name-letter");
            var a = e.clientX - t.parent()[0].getBoundingClientRect().left - t.width() / 2;
            var o = e.clientY - t.parent()[0].getBoundingClientRect().top - t.height() / 2;
            TweenMax.to(t, .5, {
                x: a * .1,
                y: o * .1
            })
        });
        e.on("mouseleave", function () {
            var e = $(this).find(".name-letter");
            TweenMax.to(e, .5, {
                y: "0px",
                x: "0px",
                ease: Elastic.easeOut.config(1, .75)
            })
        })
    }

    function y() {
        var e = [{
            elementType: "geometry",
            stylers: [{
                color: "#f5f5f5"
            }]
        }, {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#f5f5f5"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#2b6ef4"
            }]
        }, {
            featureType: "administrative",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#f1f2f4"
            }, {
                weight: 2
            }]
        }, {
            featureType: "administrative.land_parcel",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.neighborhood",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{
                color: "#f1f2f4"
            }]
        }, {
            featureType: "poi",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#ffffff"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road.local",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#2b6ef4"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }];
        var t = new google.maps.LatLng($("#map").attr("data-lat"), $("#map").attr("data-lng"));
        var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var o = a > 1024 ? true : false;
        var i = {
            zoom: 13,
            center: t,
            draggable: o,
            scrollwheel: false,
            styles: e,
            mapTypeControl: false,
            disableDefaultUI: true,
            disableDoubleClickZoom: true
        };
        var s = $(".map-marker");
        var r = false;
        map = new google.maps.Map(document.getElementById("map"), i);
        var l = new google.maps.Marker({
            position: t
        });
        google.maps.event.addListenerOnce(map, "tilesloaded", function () {
            u(l, map);
            TweenMax.fromTo(s, 1, {
                y: "40px",
                autoAlpha: 0
            }, {
                y: "0px",
                autoAlpha: 1,
                ease: Expo.easeOut
            })
        });
        google.maps.event.addListener(map, "center_changed", function (e) {
            u(l, map)
        });
        google.maps.event.addListener(map, "zoom_changed", function (e) {
            u(l, map)
        });
        if ($_body.hasClass("tablet") && $_html.hasClass("orientation_landscape")) map.panBy(-280, 0);
        if ($_body.hasClass("tablet") && $_html.hasClass("orientation_portrait")) map.panBy(40, -200);
        if (!$_body.hasClass("phone") && !$_body.hasClass("tablet")) map.panBy(-300, 0);
        if ($_body.hasClass("phone")) map.panBy(40, -230);
        var c = $(".contacts .city-selector li"),
            f = $(".contacts .contacts-info"),
            d = $(".contacts .cities-hashs"),
            p = $(".contacts .google-link");
        c.on("click", function () {
            if (r) return;
            var e = $(this),
                t = e.attr("data-target"),
                a = f.filter("." + t),
                o = a.attr("data-googleLink"),
                i = a.attr("data-latlng").split(","),
                n = new google.maps.LatLng(i[0], i[1]);
            c.removeClass("active");
            e.addClass("active");
            p.attr("href", o);
            s.attr("href", o);
            r = true;
            l.setPosition(n);
            if (t == "porto") {
                map.setZoom(14);
                map.panTo(n)
            } else {
                map.setZoom(13);
                map.panTo(n)
            }
            if ($_body.hasClass("tablet") && $_html.hasClass("orientation_landscape")) map.panBy(-280, 0);
            if ($_body.hasClass("tablet") && $_html.hasClass("orientation_portrait")) map.panBy(40, -200);
            if (!$_body.hasClass("phone") && !$_body.hasClass("tablet")) map.panBy(-300, 0);
            if ($_body.hasClass("phone")) map.panBy(40, -230);
            TweenMax.to(d.find(".active"), 1, {
                y: -d.height() - 50,
                ease: Expo.easeInOut
            });
            TweenMax.fromTo(d.find("h2").filter("." + t + "-hash"), 1, {
                y: d.height(),
                opacity: .25
            }, {
                y: 0,
                opacity: .25,
                ease: Expo.easeInOut,
                onComplete: function () {
                    d.find(".active").removeClass("active");
                    d.find("h2").filter("." + t + "-hash").addClass("active")
                }
            });
            TweenMax.to(f.filter(".active"), .5, {
                y: "40px",
                autoAlpha: 0,
                onComplete: function () {
                    TweenMax.fromTo(a, .5, {
                        y: "40px",
                        autoAlpha: 0
                    }, {
                        y: "0px",
                        autoAlpha: 1,
                        onComplete: function () {
                            u(l, map);
                            r = false
                        }
                    });
                    f.filter(".active").removeClass("active");
                    a.addClass("active")
                }
            })
        });
        if ($_body.hasClass("mobile") && $_html.hasClass("orientation_portrait")) h.scrollLeft(_globalViewportW / 3);

        function u(e, t) {
            var a = $(".map-marker");
            var o, i;
            var n = e.getPosition();
            var s = t.getProjection().fromLatLngToPoint(t.getBounds().getNorthEast());
            var r = t.getProjection().fromLatLngToPoint(t.getBounds().getSouthWest());
            var l = Math.pow(2, t.getZoom());
            var c = t.getProjection().fromLatLngToPoint(n);
            var f = new google.maps.Point((c.x - r.x) * l, (c.y - s.y) * l);
            a.css({
                top: f.y - 35,
                left: f.x - 10
            })
        }
    }

    function T(e) {
        if (!_browserObj.isMobile) {
            if (_scrollY > 10 && !$_pageHeader.hasClass("js-paused")) {
                $_pageHeader.addClass("js-paused");
                c.pause()
            }
            if (_scrollY < _globalViewportH && $_pageHeader.hasClass("js-paused")) {
                $_pageHeader.removeClass("js-paused");
                c.resume()
            }
        }
        if (!_browserObj.isMobile) {
            if (!_browserObj.isSafari) {
                p.each(function () {
                    var e = $(this);
                    if (verge.inViewport(e) && !e.hasClass("js-animated")) {
                        e.addClass("js-animated");
                        e.data("animation").play()
                    } else if (!verge.inViewport(e) && e.hasClass("js-animated")) {
                        e.removeClass("js-animated");
                        e.data("animation").stop()
                    }
                })
            }
        }
        if (!_browserObj.isPhone) {
            if (verge.inViewport($_pageFooter, -_globalViewportH / 3) && !$_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.addClass("js-animated-2");
                $_pageFooter.addClass("add-bg-color");
                $_pageFooter.prev("section").addClass("add-bg-color");
                $.doTimeout(250, function () {
                    s.animate();
                    r.animate();
                    $.doTimeout(250, function () {
                        if (!$_body.hasClass("mobile")) {
                            o.animate()
                        }
                    })
                })
            } else if (!verge.inViewport($_pageFooter, -_globalViewportH / 3) && $_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.removeClass("js-animated-2");
                $_pageFooter.removeClass("add-bg-color");
                $_pageFooter.prev("section").removeClass("add-bg-color");
                o.pause()
            }
            if (verge.inViewport(h, -150) && !h.hasClass("js-animated") && !$_body.hasClass("mobile")) {
                m.find("path").each(function (e) {
                    var t = $(this);
                    TweenMax.from(t, 1, {
                        scale: 0,
                        delay: e * .03,
                        transformOrigin: "center center",
                        ease: Elastic.easeOut.config(1, 1.2)
                    })
                });
                h.addClass("js-animated");
                TweenMax.to(h, 0, {
                    opacity: 1,
                    ease: Expo.easeOut,
                    onComplete: function () {}
                });
                TweenMax.staggerFrom(".fake-point", .1, {
                    opacity: 0,
                    delay: .2,
                    ease: Elastic.easeOut.config(1, .5)
                }, .1, function () {
                    TweenMax.set(".fake-shadow circle", {
                        opacity: 1,
                        ease: Circ.easeOut
                    });
                    TweenMax.to(".fake-shadow", 2.5, {
                        scale: 30.5,
                        opacity: 0,
                        repeat: -1,
                        ease: Circ.easeOut
                    })
                })
            }
        }
    }
    return {
        init: g,
        kill: w
    }
}

function fazemosPage(e) {
    var m = null,
        g = null,
        w = null,
        v = null,
        b = null,
        x = null,
        _ = null;
    outsourcingFirstSprite = null;
    var a = $(".we-do-list li"),
        t = $(".we-do-list li.nearshoring-item"),
        o = $(".we-do-list li.outsourcing-item"),
        n = $(".we-do-list li.software-item"),
        s = $(".we-do-list li.nearshoring-item video"),
        r = $(".we-do-list li.outsourcing-item video"),
        l = $(".we-do-list li.software-item video"),
        c = $(".we-do-list .column");
    var f = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(h)
            };
            $_window.on("scroll.fazemosPage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                h(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        $_body.detach(".rotate-title-fixed");
        if (!$_body.hasClass("mobile")) {
            hoverLinksMenu();
            u();
            breakTitleLetters(t.find("h3"));
            breakTitleLetters(o.find("h3"));
            breakTitleLetters(n.find("h3"));
            p();
            t.find("h3 .char").css("opacity", 0);
            t.find("h3").css("opacity", 1);
            o.find("h3 .char").css("opacity", 0);
            o.find("h3").css("opacity", 1);
            n.find("h3 .char").css("opacity", 0);
            n.find("h3").css("opacity", 1);
            TweenMax.to($_body.find(".main-logo"), .5, {
                opacity: 1
            });
            TweenMax.to($_body.find(".language-wrapper"), .5, {
                opacity: 1
            })
        }
    };
    var d = function () {
        if (!$_body.hasClass("mobile")) {
            if (g) g.destroy();
            if (w) w.destroy();
            if (v) v.destroy();
            if (m) m.destroy();
            cancelAnimationFrame(b);
            c.off("mousemove")
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.fazemosPage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };

    function p() {
        var e = 20;
        var o;
        var n = Date.now();
        var s = 1e3 / e;
        var r;
        var l = {
                current_frame: 0,
                total_frames: 23,
                in_frame: 13,
                can_animate: false,
                go_to_end: false
            },
            c = {
                current_frame: 0,
                total_frames: 20,
                in_frame: 11,
                can_animate: false,
                go_to_end: false
            },
            f = {
                current_frame: 0,
                total_frames: 20,
                in_frame: 11,
                can_animate: false,
                go_to_end: false
            };
        a.on("click", function () {
            $_headerMain.find("#nav-main li").removeClass("active")
        });
        a.on("mouseenter", function () {
            var e = $(this),
                t = e.find("video"),
                a = e.find("h3"),
                o = e.find("p");
            TweenMax.staggerFromTo(a.find(".char"), 1, {
                y: 50,
                opacity: 1
            }, {
                y: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(1, .7)
            }, .05);
            TweenMax.fromTo(o, 1, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            });
            if (e.hasClass("nearshoring-item")) {
                l.can_animate = true;
                l.go_to_end = false
            }
            if (e.hasClass("outsourcing-item")) {
                c.can_animate = true;
                c.go_to_end = false
            }
            if (e.hasClass("software-item")) {
                f.can_animate = true;
                f.go_to_end = false
            }
        });
        a.on("mouseleave", function () {
            var e = $(this),
                t = e.find("video"),
                a = e.find("h3"),
                o = e.find("p");
            TweenMax.killTweensOf(a.find(".char"));
            TweenMax.set([a.find(".char"), o], {
                opacity: 0
            });
            if (e.hasClass("nearshoring-item")) {
                l.can_animate = false;
                l.go_to_end = true
            }
            if (e.hasClass("outsourcing-item")) {
                c.can_animate = false;
                c.go_to_end = true
            }
            if (e.hasClass("software-item")) {
                f.can_animate = false;
                f.go_to_end = true
            }
        });
        var d = [],
            p = [],
            u = [];
        m = new PIXI.Application(_globalViewportW * 2, _globalViewportH * 2, {
            transparent: true,
            forceCanvas: true
        });
        $_pageHeader.find(".we-do").append(m.view);
        m.stop();
        var t = new PIXI.loaders.Loader;
        t.add("nearshoring_0", "/public/imgs/nearshoring/menu/menu-nearshoring@2x_0.png");
        t.add("outsourcing_0", "/public/imgs/outsourcing/menu/menu-outsourcing@2x_0.png");
        t.add("software_0", "/public/imgs/software/menu/menu-software@2x_0.png");
        t.load(function () {
            var e = [],
                t = [],
                a = [];
            var o = PIXI.Texture.fromFrame("nearshoring_0");
            e.push(o);
            var o = PIXI.Texture.fromFrame("outsourcing_0");
            t.push(o);
            var o = PIXI.Texture.fromFrame("software_0");
            a.push(o);
            x = new PIXI.extras.AnimatedSprite(e);
            $_pageHeader.find(".nearshoring-item").css("height", $_pageHeader.find(".nearshoring-item").width());
            x.x = $_pageHeader.find(".nearshoring-item")[0].getBoundingClientRect().left * 2 + $_pageHeader.find(".nearshoring-item").outerWidth();
            x.y = $_pageHeader.find(".nearshoring-item")[0].getBoundingClientRect().top * 2 + $_pageHeader.find(".nearshoring-item").outerHeight();
            x.anchor.set(.5);
            x.width = 1200;
            x.height = 1200;
            TweenMax.set(x.scale, {
                x: .98,
                y: .98
            });
            TweenMax.set(x, {
                alpha: 0
            });
            m.stage.addChild(x);
            TweenMax.to(x.scale, .5, {
                x: 1.8,
                y: 1.8,
                ease: Expo.easeOut
            });
            TweenMax.to(x, .5, {
                alpha: 1
            });
            outsourcingFirstSprite = new PIXI.extras.AnimatedSprite(t);
            $_pageHeader.find(".outsourcing-item").css("height", $_pageHeader.find(".outsourcing-item").width());
            outsourcingFirstSprite.x = $_pageHeader.find(".outsourcing-item")[0].getBoundingClientRect().left * 2 + $_pageHeader.find(".outsourcing-item").outerWidth();
            outsourcingFirstSprite.y = $_pageHeader.find(".outsourcing-item")[0].getBoundingClientRect().top * 2 + $_pageHeader.find(".outsourcing-item").outerHeight();
            outsourcingFirstSprite.anchor.set(.5);
            outsourcingFirstSprite.width = 1200;
            outsourcingFirstSprite.height = 1200;
            TweenMax.set(outsourcingFirstSprite.scale, {
                x: .98,
                y: .98
            });
            TweenMax.set(outsourcingFirstSprite, {
                alpha: 0
            });
            m.stage.addChild(outsourcingFirstSprite);
            TweenMax.to(outsourcingFirstSprite.scale, .5, {
                x: 1.8,
                y: 1.8,
                ease: Expo.easeOut
            });
            TweenMax.to(outsourcingFirstSprite, .5, {
                alpha: 1
            });
            _ = new PIXI.extras.AnimatedSprite(a);
            $_pageHeader.find(".software-item").css("height", $_pageHeader.find(".software-item").width());
            _.x = $_pageHeader.find(".software-item")[0].getBoundingClientRect().left * 2 + $_pageHeader.find(".software-item").outerWidth();
            _.y = $_pageHeader.find(".software-item")[0].getBoundingClientRect().top * 2 + $_pageHeader.find(".software-item").outerHeight();
            _.anchor.set(.5);
            _.width = 1200;
            _.height = 1200;
            TweenMax.set(_.scale, {
                x: .98,
                y: .98
            });
            TweenMax.set(_, {
                alpha: 0
            });
            m.stage.addChild(_);
            TweenMax.to(_.scale, .5, {
                x: 1.8,
                y: 1.8,
                ease: Expo.easeOut
            });
            TweenMax.to(_, .5, {
                alpha: 1
            });
            m.start();
            var n = new PIXI.loaders.Loader;
            for (i = 0; i < l.total_frames; i++) {
                n.add("nearshoring_" + i, "/public/imgs/nearshoring/menu/menu-nearshoring@2x_" + i + ".png")
            }
            for (i = 0; i < c.total_frames; i++) {
                n.add("outsourcing_" + i, "/public/imgs/outsourcing/menu/menu-outsourcing@2x_" + i + ".png")
            }
            for (i = 0; i < f.total_frames; i++) {
                n.add("software_" + i, "/public/imgs/software/menu/menu-software@2x_" + i + ".png")
            }
            n.load(function () {
                h()
            })
        });

        function h() {
            for (var e = 0; e < l.total_frames; e++) {
                var t = PIXI.Texture.fromFrame("nearshoring_" + e);
                t.baseTexture.mipmap = true;
                d.push(t)
            }
            for (var e = 0; e < c.total_frames; e++) {
                var t = PIXI.Texture.fromFrame("outsourcing_" + e);
                t.baseTexture.mipmap = true;
                p.push(t)
            }
            for (var e = 0; e < f.total_frames; e++) {
                var t = PIXI.Texture.fromFrame("software_" + e);
                t.baseTexture.mipmap = true;
                u.push(t)
            }
            v = new PIXI.extras.AnimatedSprite(d);
            $_pageHeader.find(".nearshoring-item").css("height", $_pageHeader.find(".nearshoring-item").width());
            v.x = $_pageHeader.find(".nearshoring-item")[0].getBoundingClientRect().left * 2 + $_pageHeader.find(".nearshoring-item").outerWidth();
            v.y = $_pageHeader.find(".nearshoring-item")[0].getBoundingClientRect().top * 2 + $_pageHeader.find(".nearshoring-item").outerHeight();
            v.width = 1200;
            v.height = 1200;
            v.interactive = true;
            v.buttonMode = true;
            v.anchor.set(.5);
            v.type = "nearshoring";
            TweenMax.set(v.scale, {
                x: 1.8,
                y: 1.8
            });
            TweenMax.set(v, {
                alpha: 1
            });
            m.stage.addChild(v);
            g = new PIXI.extras.AnimatedSprite(p);
            $_pageHeader.find(".outsourcing-item").css("height", $_pageHeader.find(".outsourcing-item").width());
            g.x = $_pageHeader.find(".outsourcing-item")[0].getBoundingClientRect().left * 2 + $_pageHeader.find(".outsourcing-item").outerWidth();
            g.y = $_pageHeader.find(".outsourcing-item")[0].getBoundingClientRect().top * 2 + $_pageHeader.find(".outsourcing-item").outerHeight();
            g.width = 1200;
            g.height = 1200;
            g.interactive = true;
            g.buttonMode = true;
            g.anchor.set(.5);
            g.type = "outsourcing";
            TweenMax.set(g.scale, {
                x: 1.8,
                y: 1.8
            });
            TweenMax.set(g, {
                alpha: 1
            });
            m.stage.addChild(g);
            w = new PIXI.extras.AnimatedSprite(u);
            $_pageHeader.find(".software-item").css("height", $_pageHeader.find(".software-item").width());
            w.x = $_pageHeader.find(".software-item")[0].getBoundingClientRect().left * 2 + $_pageHeader.find(".software-item").outerWidth();
            w.y = $_pageHeader.find(".software-item")[0].getBoundingClientRect().top * 2 + $_pageHeader.find(".software-item").outerHeight();
            w.width = 1200;
            w.height = 1200;
            w.interactive = true;
            w.buttonMode = true;
            w.anchor.set(.5);
            w.type = "software";
            TweenMax.set(w.scale, {
                x: 1.8,
                y: 1.8
            });
            TweenMax.set(w, {
                alpha: 1
            });
            m.stage.addChild(w);
            b = _rAF_loop(a);
            a();
            m.stage.removeChild(x);
            m.stage.removeChild(outsourcingFirstSprite);
            m.stage.removeChild(_);
            x = null;
            outsourcingFirstSprite = null;
            _ = null;

            function a() {
                b = _rAF_loop(a);
                o = Date.now();
                r = o - n;
                if (r > s) {
                    n = o - r % s;
                    if (l.can_animate) {
                        if (l.current_frame < l.in_frame) {
                            v.gotoAndStop(l.current_frame++)
                        }
                    } else if (l.go_to_end) {
                        if (l.current_frame == l.total_frames) {
                            l.current_frame = 0;
                            l.go_to_end = false
                        }
                        v.gotoAndStop(l.current_frame++)
                    }
                    if (c.can_animate) {
                        if (c.current_frame < c.in_frame) {
                            g.gotoAndStop(c.current_frame++)
                        }
                    } else if (c.go_to_end) {
                        if (c.current_frame == c.total_frames) {
                            c.current_frame = 0;
                            c.go_to_end = false
                        }
                        g.gotoAndStop(c.current_frame++)
                    }
                    if (f.can_animate) {
                        if (f.current_frame < f.in_frame) {
                            w.gotoAndStop(f.current_frame++)
                        }
                    } else if (f.go_to_end) {
                        if (f.current_frame == f.total_frames) {
                            f.current_frame = 0;
                            f.go_to_end = false
                        }
                        w.gotoAndStop(f.current_frame++)
                    }
                }
            }
        }
    }

    function u() {
        c.on("mousemove", function (e) {
            var t = $(this).find("a");
            var a = e.clientX - t.parent()[0].getBoundingClientRect().left - t.width() / 2;
            var o = e.clientY - t.parent()[0].getBoundingClientRect().top - t.height() / 2;
            TweenMax.to(t, .5, {
                x: a * .1,
                y: o * .1
            });
            TweenMax.to(t.find("h3"), .75, {
                x: a * .05,
                y: o * .05
            })
        });
        c.on("mouseleave", function () {
            var e = $(this).find("a");
            TweenMax.to(e, .5, {
                y: "0px",
                x: "0px",
                ease: Elastic.easeOut.config(1, .75)
            });
            TweenMax.to(e.find("h3"), .75, {
                y: "0px",
                x: "0px",
                ease: Elastic.easeOut.config(1, .75)
            })
        })
    }

    function h(e) {}
    return {
        init: f,
        kill: d
    }
}

function four04Page() {
    var e = $(".page-header .background-wrapper"),
        i = $(".page-header").find(".header-pictogram"),
        n = $(".page-header").find(".header-image-wrapper .block-bg-cover"),
        t = textFireworks({
            element: $(".page-header h3"),
            animationType: "smoothEntrance",
            delay: .5
        }),
        a = textFireworks({
            element: $(".page-header a"),
            animationType: "smoothEntrance",
            delay: .75
        }),
        o = null;
    var s = function () {
        if (!$_body.hasClass("mobile")) {
            o = new Pizzicato.Sound({
                source: "file",
                loop: true,
                options: {
                    path: "public/audio/404_owl.mp3"
                }
            }, function () {
                o.play()
            });
            o.release = .4;
            o.volume = 2;
            t.init();
            a.init();
            $_window.on("blur.audios", function () {
                o.pause()
            });
            $_window.on("focus.audios", function () {
                o.play()
            });
            $.doTimeout(1200, function () {
                $(".page-header a").addClass("js-active")
            });
            TweenMax.set(i, {
                scale: .8,
                skewX: 10,
                rotationX: -90,
                transformOrigin: "center center",
                perspective: 300
            });
            TweenMax.staggerTo(i, 2, {
                opacity: 1,
                scale: 1,
                skewX: 0,
                rotationX: 0,
                ease: Elastic.easeOut.config(1, .7)
            }, .15);
            e.on("mousemove.headerParallax", function (e) {
                var t = $(this);
                var a = e.clientX - t[0].getBoundingClientRect().left - t.width() / 2;
                var o = e.clientY - t[0].getBoundingClientRect().top - t.height() / 2;
                TweenMax.to(n, 1, {
                    x: a * .01,
                    y: o * .01
                });
                TweenMax.to(i.eq(0), 1, {
                    x: a * .025,
                    y: o * .025
                });
                TweenMax.to(i.eq(1), 1, {
                    x: a * .035,
                    y: o * .035
                });
                TweenMax.to(i.eq(2), 1, {
                    x: a * .025,
                    y: o * .025
                })
            })
        }
    };
    var r = function () {
        $_window.off("blur.audios");
        $_window.off("focus.audios");
        o.stop();
        o = null
    };

    function l() {
        var e, a, o, t, i, n, s;
        var r = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
        t = 1e3;
        0;
        s = .02;
        l();

        function l() {
            a = document.getElementById("myCanvas");
            a.width = window.innerWidth;
            a.height = window.innerHeight;
            o = a.getContext("2d");
            c();
            d()
        }

        function c() {
            n = [];
            n.push(new m)
        }

        function f(e) {
            o.clearRect(0, 0, a.width, a.height);
            a.width = window.innerWidth;
            a.height = window.innerHeight;
            o = a.getContext("2d");
            i = g();
            u();
            id = requestAnimationFrame(f)
        }

        function d() {
            e = requestAnimationFrame(f)
        }

        function p() {
            if (e) {
                cancelAnimationFrame(e)
            }
        }

        function u() {
            h()
        }

        function h() {
            if (n.length < t - 1) {
                n.push(new m)
            }
            for (var e = 0; e <= n.length - 1; e++) {
                n[e].draw();
                n[e].update()
            }
        }

        function m() {
            var e = this;
            (function () {
                t()
            })();
            e.update = function () {
                if (e.opacity < 0) {
                    t()
                } else {
                    e.opacity -= e.speedOpacity
                }
                e.heigthv = e.heigth < e.width && e.heigth > 0 ? e.heigthv : -e.heigthv;
                e.heigth += e.heigthv;
                e.rotation += e.rotationv;
                e.x = e.x + e.vx;
                e.y = e.y + e.vy;
                e.vy += s
            };
            e.draw = function () {
                o.save();
                o.beginPath();
                o.globalAlpha = e.opacity;
                o.fillStyle = e.color;
                o.translate(e.x, e.y);
                o.rotate(e.rotation * Math.PI / 180);
                o.ellipse(0 - e.width / 2, 0 - e.heigth / 2, Math.abs(e.width), Math.abs(e.heigth), 0, 0, 2 * Math.PI);
                o.fill();
                o.closePath();
                o.restore()
            };

            function t() {
                e.x = a.width / 2;
                e.y = a.height / 2;
                e.vx = -2 + Math.random() * 4;
                e.vy = Math.random() * -5;
                e.width = Math.random() * i / 20;
                e.heigth = Math.random() * e.width;
                e.heigthv = Math.random() * 2;
                e.rotation = Math.random() * 360;
                e.rotationv = Math.random() * 3;
                e.color = r[Math.floor(Math.random() * r.length)];
                e.opacity = 1;
                e.speedOpacity = Math.random() * .3
            }
        }

        function g() {
            var e = Math.min(a.width, a.height);
            return e / 2.5
        }
    }
    return {
        init: s,
        kill: r
    }
}

function homePage() {
    if ($_body.hasClass("js-no-ajax")) {
        var e = 0,
            t = 1
    } else {
        var e = .5,
            t = 1.5
    }
    var a = hashtagScroll(),
        o = $(".page-footer").offset().top,
        n = textFireworks({
            element: $(".page-footer h2"),
            animationType: "smoothEntrance",
            delay: 0,
            setupArgs: {
                yValue: 100,
                animationTime: .4
            }
        }),
        s = textFireworks({
            element: $(".page-footer h5"),
            animationType: "smoothEntrance",
            delay: .6,
            setupArgs: {
                yValue: 20,
                animationTime: .8
            }
        }),
        r = C(),
        l = headerParallax($(".page-header")),
        c = new GlAnimation({
            title: "home",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: 1,
            objLetter_ScaleDesktop: .95,
            objGroupX_desktop: 0,
            objGroupY_desktop: .5,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: 1,
            objLetter_ScaleMaxDesktop: .95,
            objGroupX_MaxDesktop: 0,
            objGroupY_MaxDesktop: .5,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: 1,
            objLetter_ScaleBigDesktop: .95,
            objGroupX_bigDesktop: 0,
            objGroupY_bigDesktop: .5,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.2,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: 1,
            mouseInfluence: .8
        }),
        f = new GlAnimation({
            title: "newsletter",
            phoneMaxWidth: 599,
            objsGroup_ScalePhone: .0019,
            objNew_ScalePhone: 12,
            objGroupX_Phone: 0,
            objGroupY_Phone: 15.5,
            objGroupZ_Phone: 0,
            tabletPortraitMaxWidth: 900,
            objsGroup_ScaleTabletPortrait: .001225,
            objNew_ScaleTabletPortrait: 12,
            objGroupX_tabletPortrait: 0,
            objGroupY_tabletPortrait: 10.5,
            objGroupZ_tabletPortrait: 0,
            tabletLandMaxWidth: 1200,
            objsGroup_ScaleTabletLand: .00108,
            objNew_ScaleTabletLand: 12,
            objGroupX_tabletLand: 0,
            objGroupY_tabletLand: 1.7,
            objGroupZ_tabletLand: 0,
            desktopMaxWidth: 1800,
            objsGroup_ScaleDesktop: 6e-4,
            objNew_ScaleDesktop: 12,
            objGroupX_desktop: 0,
            objGroupY_desktop: 1.7,
            objGroupZ_desktop: 0,
            objWidthBigDesktop: 7e-4,
            objNew_ScaleBigDesktop: 12,
            objGroupX_bigDesktop: 0,
            objGroupY_bigDesktop: 1.7,
            objGroupZ_bigDesktop: 0,
            aniTime: 2,
            aniTimeLoop: 4,
            aniTimeFadeIn: 1,
            mouseInfluence: .8
        });
    var d = $(".gallery"),
        p = $(".rotate-title h2"),
        u = $(".morphing-letter"),
        h = $(".news-events"),
        m = $(".news-container"),
        g = $(".plus-button"),
        w = $(".newsletter-popup"),
        v = $(".statistics"),
        b = $(".popup-link .rgpd-wrapper"),
        x = $(".job-offers"),
        _ = $(".deloitte-background svg path");
    var y = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(P)
            };
            $_window.on("scroll.homePage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                P(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        $_body.detach(".rotate-title-fixed");
        p.each(function () {
            var e = $(this);
            e.css("height", e.closest(".container").outerHeight() + "px")
        });
        S();
        O();
        elasticButtonsInputs();
        E();
        j();
        statisticsAnimation();
        TweenMax.to(_, 2, {
            morphSVG: "M396,1S42.25-.17,6,254c-34,260,389,75.06,389,431Z",
            repeat: -1,
            yoyo: true,
            ease: Sine.easeOut
        });
        $("#awwwards a").on("click", function () {
            ga("send", {
                hitType: "event",
                eventCategory: "Awwwards",
                eventAction: "click",
                eventLabel: "Ribbon Click"
            })
        });
        if ($(".popup-link .elastic-btn")) {
            if ($(".popup-link .elastic-btn").hasClass("anchor")) {
                $(".popup-link .anchor").on("click", function () {
                    _clickAnchorContacts = true
                })
            }
        }
        if (!$_body.hasClass("mobile")) {
            TweenMax.set(x.find(".job-wrapper"), {
                x: _globalViewportW,
                force3D: true
            });
            TweenMax.set(h.find(".news-wrapper"), {
                y: "200px",
                force3D: true
            });
            n.init();
            s.init();
            r.init();
            if (!$_html.hasClass("safari")) {
                animateMorphLetters()
            }
            TweenMax.to($_body.find(".main-logo"), .5, {
                opacity: 1
            });
            TweenMax.to($_body.find(".language-wrapper"), .5, {
                opacity: 1
            });
            hoverLinksMenu()
        }
        M()
    };
    var T = function () {
        if (!$_body.hasClass("mobile")) {
            r.kill();
            n.kill();
            s.kill();
            $(window).off("blur");
            $(window).off("focus")
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.homePage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };
    w.on("submit", function (e) {
        var t = $(this);
        t.addClass("sending");
        validateForm(t);
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        if (t.find(".email").val().length === 0) {
            w.find(".elastic-input").addClass("erro");
            return
        } else {
            w.find(".elastic-input").removeClass("erro")
        }
        $.ajax({
            type: "post",
            url: "/mailchimp.php",
            data: t.serialize(),
            success: function (e) {
                console.log("success");
                TweenMax.to(w.find(".success-text"), .7, {
                    autoAlpha: 1,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to(w.find(".morph-container path"), .7, {
                    stroke: "#2ecc71",
                    ease: Elastic.easeOut.config(1, .7)
                });
                t.removeClass("sending");
                t[0].reset();
                t.find("input").blur();
                $.doTimeout(1500, function () {
                    TweenMax.to(w.find(".success-text"), .7, {
                        autoAlpha: 0,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(w.find(".morph-container path"), .7, {
                        stroke: "#ffffff",
                        ease: Elastic.easeOut.config(1, .7),
                        onComplete: function () {
                            TweenMax.set(w.find(".morph-container path"), {
                                clearProps: "all"
                            })
                        }
                    })
                })
            },
            error: function (e) {
                console.log("error");
                TweenMax.to(w.find(".success-text"), .7, {
                    autoAlpha: 1,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to(w.find(".morph-container path"), .7, {
                    stroke: "#d40000",
                    ease: Elastic.easeOut.config(1, .7)
                });
                t.removeClass("sending");
                t[0].reset();
                t.find("input").blur();
                $.doTimeout(1500, function () {
                    TweenMax.to(w.find(".success-text"), .7, {
                        autoAlpha: 0,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(w.find(".morph-container path"), .7, {
                        stroke: "#ffffff",
                        ease: Elastic.easeOut.config(1, .7),
                        onComplete: function () {
                            TweenMax.set(w.find(".morph-container path"), {
                                clearProps: "all"
                            })
                        }
                    })
                })
            }
        })
    });

    function M() {
        b.on("click", function () {
            if (!$(".popup-link form").hasClass("active")) {
                $(".popup-link form").addClass("active");
                $(".popup-link form .rgpd-wrapper svg").addClass("active");
                $(".popup-link form input.check-policy").val("checked");
                $(".popup-link form input.check-policy").trigger("blur");
                $(".newsletter-popup").find("button").addClass("enable")
            } else {
                $(".popup-link form").removeClass("active");
                $(".popup-link form .rgpd-wrapper svg").removeClass("active");
                $(".popup-link form input.check-policy").val("");
                $(".popup-link form input.check-policy").trigger("blur");
                $(".newsletter-popup").find("button").removeClass("enable")
            }
        });
        $(".popup-link .elastic-input").on("focus", function () {
            TweenMax.to($(".submit-btn").find("path"), 1, {
                morphSVG: $(".submit-btn").attr("data-hover"),
                ease: Elastic.easeOut.config(1, .5)
            })
        }).on("blur", function () {
            TweenMax.to($(".submit-btn").find("path"), 1, {
                morphSVG: $(".submit-btn").attr("data-original"),
                ease: Elastic.easeOut.config(1, .5)
            })
        });
        m.on("click", function () {
            if (_customScroll) _customScroll.scrollTo(0, _scrollLimit, 4e3)
        });
        g.on("click", function () {
            var n = $(this),
                s = Number(n.attr("data-offset")),
                r = Number(n.attr("data-limit"));
            TweenMax.to(n.parent().find("span"), .4, {
                opacity: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(n, 1, {
                rotation: 180,
                ease: Elastic.easeIn.config(1, .7),
                repeat: -1,
                yoyo: true,
                force3D: true
            });
            $.get("/wp-json/affinity/v1/news/more-news?offset=" + s + "&limit=" + r, function (e) {
                var i = $(e["news"]);
                i.imagesLoaded(function (e, t, a) {
                    var o = $(this).imagesLoaded();
                    o.always(function () {
                        TweenMax.set(i, {
                            opacity: 0,
                            y: "50px"
                        });
                        $(".news-list-wrapper").append(i);
                        TweenMax.to(n, 1, {
                            scale: 0,
                            ease: Elastic.easeIn.config(1, .7),
                            onComplete: function () {
                                n.parent().remove();
                                n.attr("data-offset", Number(s + r));
                                TweenMax.staggerTo(i, 3, {
                                    opacity: 1,
                                    y: "0px",
                                    ease: Elastic.easeOut.config(1, .7)
                                }, .2)
                            }
                        })
                    })
                })
            })
        })
    }

    function k() {
        var e = $(".video-event-split"),
            t = false;
        if (!_browserObj.isMobile) {
            $(window).on("blur", function () {
                if (t) {
                    $(".full-video").find("video").get(0).pause()
                }
            });
            $(window).on("focus", function () {
                if (t) {
                    $(".full-video").find("video")[0].play()
                }
            })
        }
        $(".full-video").find("video").on("ended", function () {
            $(".home-fullvideos-container .elastic-btn").click()
        });
        if (!_browserObj.isPhone) {
            e.hover(function () {
                var e = $(this).attr("data-id");
                if (!$(this).hasClass("active")) {
                    $(".video-event-split").removeClass("active");
                    $("." + e + "").addClass("active");
                    $(".video-block").find("video").get(0).pause();
                    $(".video-block").find("video").get(0).currentTime = 0;
                    $(".video-block").find("video").get(1).pause();
                    $(".video-block").find("video").get(1).currentTime = 0;
                    $(".video-block").css("opacity", 0);
                    $("." + e + "-teaser").css("opacity", 1);
                    $("." + e + "-teaser").find("video")[0].play()
                }
            }, function () {
                $(".video-event-split").removeClass("active");
                $(".people").addClass("active");
                $(".business-teaser").css("opacity", 0);
                $(".people-teaser").css("opacity", 1);
                $(".video-block").find("video").get(1).pause();
                $(".video-block").find("video").get(1).currentTime = 0;
                if (!t) {
                    $(".people-teaser").find("video")[0].play()
                }
            });
            e.on("click", function () {
                var e = $(this).attr("data-id");
                t = true;
                $_body.addClass("is-fullvideo-open");
                $(".home-fullvideos-container").css("pointer-events", "all");
                TweenMax.to(".scroll-content-wrapper", 2, {
                    opacity: 0,
                    ease: "Expo.easeOut"
                });
                TweenMax.to(".home-fullvideos-container", 1, {
                    autoAlpha: 1,
                    onComplete: function () {
                        $(".video-block").find("video").get(0).pause();
                        $(".video-block").find("video").get(0).currentTime = 0;
                        $(".video-block").find("video").get(1).pause();
                        $(".video-block").find("video").get(1).currentTime = 0
                    },
                    ease: "Expo.easeInOut"
                });
                if ($_body.hasClass("pt-lang")) {
                    $(".full-video").find("video source").attr("src", "/public/video/" + e + "-full-pt.mp4")
                } else {
                    $(".full-video").find("video source").attr("src", "/public/video/" + e + "-full.mp4")
                }
                TweenMax.to(".full-video", 1, {
                    opacity: 1,
                    ease: "Expo.easeInOut"
                });
                $(".full-video").find("video")[0].load();
                $(".full-video").find("video")[0].play()
            });
            $(".home-fullvideos-container .elastic-btn").on("click", function () {
                $_body.removeClass("is-fullvideo-open");
                $(".home-fullvideos-container").css("pointer-events", "none");
                t = false;
                $(".full-video").find("video").get(0).pause();
                $(".full-video").find("video").get(0).currentTime = 0;
                $(".people-teaser").find("video")[0].play();
                TweenMax.to(".scroll-content-wrapper", 2, {
                    opacity: 1,
                    ease: "Expo.easeOut"
                });
                TweenMax.to(".home-fullvideos-container", 1, {
                    autoAlpha: 0,
                    ease: "Expo.easeOut"
                })
            })
        } else {
            var a = typeof window !== "undefine";
            var o = a && window.navigator.userAgent.toLowerCase();
            var i = o && o.indexOf("android") > 0;
            window.onorientationchange = function () {
                if (screen.orientation.angle > 0) {
                    $(".home-fullvideos-container .full-video .element-cover").css("object-fit", "cover")
                } else {
                    $(".home-fullvideos-container .full-video .element-cover").css("object-fit", "contain")
                }
            };
            e.on("click", function () {
                var e = $(this).attr("data-id");
                if (i) {
                    t = true;
                    $_body.addClass("is-fullvideo-open");
                    $(".home-fullvideos-container").css("pointer-events", "all");
                    TweenMax.to(".scroll-content-wrapper", 2, {
                        opacity: 0,
                        ease: "Expo.easeOut"
                    });
                    TweenMax.to(".home-fullvideos-container", 1, {
                        autoAlpha: 1,
                        onComplete: function () {
                            $(".video-block").find("video").get(0).pause();
                            $(".video-block").find("video").get(0).currentTime = 0;
                            $(".video-block").find("video").get(1).pause();
                            $(".video-block").find("video").get(1).currentTime = 0
                        },
                        ease: "Expo.easeInOut"
                    });
                    $(".full-video").find("video source").attr("src", "/public/video/" + e + "-mobile.mp4");
                    TweenMax.to(".full-video", 1, {
                        opacity: 1,
                        ease: "Expo.easeInOut"
                    });
                    $(".full-video").find("video")[0].load();
                    $(".full-video").find("video")[0].play()
                } else {
                    $("." + e + "-mobile").find("video")[0].play()
                }
            });
            $(".home-fullvideos-container .elastic-btn").on("click", function () {
                $_body.removeClass("is-fullvideo-open");
                $(".home-fullvideos-container").css("pointer-events", "none");
                t = false;
                $(".full-video").find("video").get(0).pause();
                $(".full-video").find("video").get(0).currentTime = 0;
                $(".people-teaser").find("video")[0].play();
                TweenMax.to(".scroll-content-wrapper", 2, {
                    opacity: 1,
                    ease: "Expo.easeOut"
                });
                TweenMax.to(".home-fullvideos-container", 1, {
                    autoAlpha: 0,
                    ease: "Expo.easeOut"
                })
            })
        }
    }
    k();

    function C() {
        var n = null,
            s = null,
            r = [],
            e = 20,
            t, a = Date.now(),
            o = 1e3 / e,
            l, c = null,
            f = false,
            d = 0;
        var p = function () {
            n = new PIXI.Application($_pageFooter.width(), $_pageFooter.height(), {
                transparent: true,
                forceCanvas: true
            });
            n.stop();
            $_pageFooter.find(".alphabeth-wrapper").append(n.view);
            var e = new PIXI.loaders.Loader;
            for (i = 0; i < 30; i++) {
                e.add("envelope_" + i, "/public/imgs/home/envelope/envelope_" + i + ".png")
            }
            e.load(function () {
                g()
            });
            $_window.on("resize.footerAnimation", $.debounce(500, m))
        };
        var u = function () {
            f = true
        };
        var h = function () {
            cancelAnimationFrame(c);
            c = null
        };
        return {
            init: p,
            animate: u,
            kill: h
        };

        function m() {
            var e = _globalViewportW / 1.75;
            var t = 850 * e / 1214;
            s.x = ($_window.width() - e) / 2;
            s.y = ($_window.height() - t) / 2;
            s.width = e;
            s.height = t
        }

        function g() {
            for (var e = 0; e < 30; e++) {
                var t = PIXI.Texture.fromFrame("envelope_" + e);
                t.baseTexture.mipmap = true;
                r.push(t)
            }
            s = new PIXI.extras.AnimatedSprite(r);
            var a = _globalViewportW / 1.75;
            var o = 850 * a / 1214;
            s.x = (_globalViewportW - a) / 2;
            s.y = (_globalViewportH - o) / 2;
            s.width = a;
            s.height = o;
            s.interactive = true;
            s.buttonMode = true;
            s.anchor.set(0);
            n.stage.addChild(s);
            c = _rAF_loop(w);
            w();
            n.start()
        }

        function w() {
            c = _rAF_loop(w);
            t = Date.now();
            l = t - a;
            if (l > o) {
                a = t - l % o;
                if (f) {
                    if (d < 30) {
                        s.gotoAndStop(d++)
                    }
                }
            }
        }
    }

    function j() {
        var e = $("#social-activity"),
            n = e.find(".twitter-container, .news-container, .vertical-block, .gallery:not(.gallery-facebook-titles), .insta-container"),
            t = e.find(".gallery:not(.gallery-facebook-titles)");
        t.each(function () {
            var e = $(this);
            s("next", e)
        });
        $_window.on("resize.Mosaic", $.debounce(200, a));

        function a() {
            t.each(function () {
                var e = $(this);
                TweenMax.set(e.find("li"), {
                    clearProps: "all"
                });
                TweenMax.killTweensOf(e.find("li"));
                s("next", e)
            })
        }

        function o() {
            var e = $(".clients"),
                t = $(".contacts");
            var a = {
                rootMargin: "0px",
                threshold: [0]
            };
            var o = function (e, t) {
                e.forEach(function (e) {
                    if (e.isIntersecting || e.intersectionRatio > 0) {
                        TweenMax.to(e.target, 2, {
                            y: "0px",
                            ease: Elastic.easeOut.config(1, .7)
                        })
                    }
                })
            };
            var i = new IntersectionObserver(o, a);
            n.each(function () {
                var e = $(this);
                TweenMax.set(e, {
                    y: "100px"
                });
                i.observe(e[0])
            })
        }

        function s(e, t) {
            var a = t,
                o = a.find("li"),
                i = Math.floor(Math.random() * 10) + 5;
            if (e == "next") {
                if (a.hasClass("gallery-facebook")) {
                    TweenMax.to(a.parent(".facebook-container").find(".gallery-facebook-titles"), 2, {
                        x: "-=" + a.parent(".facebook-container").find(".gallery-facebook-titles").outerWidth(),
                        delay: i + .1,
                        ease: Expo.easeOut
                    })
                }
                TweenMax.to(o, 2, {
                    x: "-=" + o.outerWidth(),
                    delay: i,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        s("previous", a)
                    }
                })
            } else {
                if (a.hasClass("gallery-facebook")) {
                    TweenMax.to(a.parent(".facebook-container").find(".gallery-facebook-titles"), 2, {
                        x: "+=" + a.parent(".facebook-container").find(".gallery-facebook-titles").outerWidth(),
                        delay: i + .1,
                        ease: Expo.easeOut
                    })
                }
                TweenMax.to(o, 2, {
                    x: "+=" + o.outerWidth(),
                    delay: i,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        s("next", a)
                    }
                })
            }
        }
    }

    function E() {
        d.each(function () {
            var e = $(this),
                t = e.find("li").length;
            e.css("width", $(this).find("li").outerWidth() * t + "px");
            e.find("li").css("width", e.outerWidth() / t + "px");
            e.find("li").css("min-width", e.outerWidth() / t + "px")
        })
    }

    function O() {
        var o = $("form");
        breakTitleLetters(o.find(".elastic-btn .text"));
        o.find("input").on("focus", function () {
            TweenMax.staggerTo(o.find("label"), .5, {
                opacity: 0,
                ease: Expo.easeOut
            })
        });
        o.find("input").on("blur", function () {
            var e = $(this);
            if (e.val() === 0 || e.val() == "") {
                TweenMax.staggerTo(o.find("label"), .5, {
                    opacity: 1,
                    ease: Expo.easeOut
                })
            }
            if ($_html.hasClass("safari")) {
                if (_customScroll) {
                    _customScroll.update()
                }
            }
        });
        o.on("submit", function (e) {
            var t = $(this);
            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
            if (validateForm(o) && !o.hasClass("js-sending")) {
                t.addClass("js-sending");
                o.find(".elastic-input").removeClass("erro");
                t.find(".elastic-btn").css({
                    "pointer-events": "none"
                });
                TweenMax.staggerTo(o.find(".elastic-btn .text .char"), 1, {
                    y: "-50px",
                    opacity: 0,
                    ease: Expo.easeOut
                }, .05);
                TweenMax.to(o.find(".loader-wrapper"), .2, {
                    opacity: 1,
                    delay: 1
                });
                var a = {
                    language: o.find('input[name="language"]').val(),
                    file: o.find('input[name="file_url"]').val(),
                    email: o.find('input[name="email"]').val()
                };
                console.log(a);
                $.ajax({
                    type: "post",
                    url: window.location.protocol + "//" + window.location.hostname + "/wp-admin/admin-ajax.php",
                    data: {
                        action: "sendBrochure",
                        value: a
                    },
                    success: function (e) {
                        console.log(e);
                        $.doTimeout(2e3, function () {
                            o.find(".elastic-btn .text").text("success");
                            breakTitleLetters(o.find(".elastic-btn .text"));
                            TweenMax.set(o.find(".elastic-btn .text .char"), {
                                y: "-50px",
                                opacity: 0
                            })
                        });
                        $.doTimeout(4e3, function () {
                            TweenMax.staggerTo(o.find(".elastic-btn .text .char"), 1, {
                                y: "0px",
                                opacity: 1,
                                ease: Expo.easeOut
                            }, -.05, function () {
                                o.find("input").trigger("blur")
                            });
                            TweenMax.to(o.find(".loader-wrapper"), .2, {
                                opacity: 0
                            })
                        })
                    },
                    error: function (e) {
                        $.doTimeout(2e3, function () {
                            o.find(".elastic-btn .text").text("try again!");
                            breakTitleLetters(o.find(".elastic-btn .text"));
                            TweenMax.set(o.find(".elastic-btn .text .char"), {
                                y: "-50px",
                                opacity: 0
                            })
                        });
                        $.doTimeout(4e3, function () {
                            TweenMax.staggerTo(o.find(".elastic-btn .text .char"), 1, {
                                y: "0px",
                                opacity: 1,
                                ease: Expo.easeOut
                            }, -.05, function () {
                                o[0].reset();
                                o.find("input").trigger("blur")
                            });
                            TweenMax.to(o.find(".loader-wrapper"), .2, {
                                opacity: 0
                            })
                        })
                    }
                })
            } else if (!validateForm(o)) {
                o.find(".elastic-input").addClass("erro")
            }
        })
    }

    function S() {
        var e = $(".we-do-list .column");
        e.on("mousemove", function (e) {
            var t = $(this).find("a");
            var a = e.clientX - t.parent()[0].getBoundingClientRect().left - t.width() / 2;
            var o = e.clientY - t.parent()[0].getBoundingClientRect().top - t.height() / 2;
            TweenMax.to(t, .5, {
                x: a * .1,
                y: o * .1
            });
            TweenMax.to(t.find("h3"), .75, {
                x: a * .05,
                y: o * .05
            })
        });
        e.on("mouseleave", function () {
            var e = $(this).find("a");
            TweenMax.to(e, .5, {
                y: "0px",
                x: "0px",
                ease: Elastic.easeOut.config(1, .75)
            });
            TweenMax.to(e.find("h3"), .75, {
                y: "0px",
                x: "0px",
                ease: Elastic.easeOut.config(1, .75)
            })
        })
    }

    function P(e) {
        if (!_browserObj.isMobile) {
            if (!_browserObj.isIE && !_browserObj.isEdge) {
                a.init(_scrollY)
            }
            if (!_browserObj.isSafari) {
                u.each(function () {
                    var e = $(this);
                    if (verge.inViewport(e) && !e.hasClass("js-animated")) {
                        e.addClass("js-animated");
                        e.data("animation").play()
                    } else if (!verge.inViewport(e) && e.hasClass("js-animated")) {
                        e.removeClass("js-animated");
                        e.data("animation").stop()
                    }
                })
            }
            if (_scrollY > _globalViewportH / 10 && !$_pageHeader.hasClass("js-paused")) {
                $_pageHeader.addClass("js-paused")
            }
            if (_scrollY < _globalViewportH / 10 && $_pageHeader.hasClass("js-paused")) {
                $_pageHeader.removeClass("js-paused")
            }
            if (verge.inViewport(x, -500) && !x.hasClass("js-animated")) {
                x.addClass("js-animated");
                TweenMax.staggerTo(x.find(".job-wrapper"), .8, {
                    x: 0,
                    ease: Elastic.easeOut.config(1, 2),
                    force3D: true
                }, .2)
            }
            if (verge.inViewport(h, -500) && !h.hasClass("js-animated")) {
                h.addClass("js-animated");
                TweenMax.staggerTo(h.find(".news-wrapper"), 2, {
                    y: 0,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                }, .2)
            }
        }
        if (!_browserObj.isPhone) {
            if (verge.inViewport($_pageFooter, -_globalViewportH / 3) && !$_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.addClass("js-animated-2");
                $_pageFooter.addClass("add-bg-color");
                $_pageFooter.prev("section").addClass("add-bg-color");
                $.doTimeout(500, function () {
                    n.animate();
                    s.animate();
                    $.doTimeout(100, function () {
                        if (!_browserObj.isMobile) {}
                    });
                    $.doTimeout(2e3, r.animate())
                })
            } else if (!verge.inViewport($_pageFooter, -_globalViewportH / 3) && $_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.removeClass("js-animated-2");
                $_pageFooter.removeClass("add-bg-color");
                $_pageFooter.prev("section").removeClass("add-bg-color");
                if (!_browserObj.isMobile) {}
            }
        }
    }
    return {
        init: y,
        kill: T
    }
}

function noticiasPage(e) {
    var r = false,
        t = $_body.hasClass("single-noticias"),
        l = [],
        s = readProgress(),
        c, f = window.location.search,
        d = true,
        p = -1,
        u = 0,
        n = 0,
        h = true,
        c = null;
    var m = $(".full-page-container"),
        g = $(".nav-sidebar"),
        a = $(".sidebar-filter-item"),
        o = $(".nav-filter"),
        i = $(".nav-filter-item-wrapper"),
        w = $(".nav-sidebar-item"),
        v = $(".nav-sidebar-item.active"),
        b = $(".full-page-article"),
        x = $(".nav-sidebar-list"),
        _ = $(".nav-sidebar-scroll"),
        y = $(".nav-sidebar-item.active .scroll-indicator-wrapper"),
        T = $(".nav-sidebar-item.active .scroll-indicator"),
        M = $(".iframe-embed"),
        k = $(".rotate-title h2"),
        C = $(".load-next-wrapper");
    var j = function () {
        if (!$_body.hasClass("mobile")) $_window.on("resize.noticiasPage", $.debounce(500, H));
        nav_bar_width = g.width();
        $_window.on("mousemove.noticiasPage", $.debounce(50, function (e) {
            n = e.clientX
        }));
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(A)
            };
            $_window.on("scroll.noticiasPage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                A(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        g.on("mousewheel.navSidebar", function (e, t) {
            if (_customScroll) _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/)
        });
        m.on("mousewheel.mainContainer", function (e, t) {
            if (_customScroll) _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
        });
        TweenMax.set(C.find(".indicator"), {
            scaleX: 0,
            transformOrigin: "center left"
        });
        k.each(function () {
            var e = $(this);
            e.css("height", e.closest(".container").outerHeight() + "px")
        });
        if (!$_body.hasClass("mobile")) {
            hoverLinksMenu()
        }
        if ($_body.hasClass("mobile")) $_headerMain.find("#nav-main-mobile li[data-controller='noticias-page']").addClass("active");
        if (!$_body.hasClass("mobile")) {
            c = Scrollbar.init(_[0], {
                speed: .8,
                syncCallbacks: true
            });
            c.addListener(function (e) {
                if (!$_html.hasClass("edge") && !$_html.hasClass("ie")) {
                    TweenMax.set($(".nav-filter"), {
                        top: e.offset.y + "px"
                    })
                }
            })
        }
        m.find(".full-page-article").each(function () {
            var e = $(this),
                t = {};
            t.element = e;
            t.offsetY = e.offset().top;
            t.height = e.outerHeight();
            l.push(t)
        });
        S();
        O();
        if (!$_body.hasClass("mobile")) s.init();
        if (o.find(".nav-filter-item-wrapper ul li.active button").text()) o.find(".nav-filter-active").html(o.find(".nav-filter-item-wrapper ul li.active button").text()).addClass("fade-in");
        else o.find(".nav-filter-active").addClass("fade-in");
        var e = M.find("iframe").attr("width") / M.find("iframe").attr("height");
        M.find("iframe").attr("width", M.width()).attr("height", M.width() / e);
        TweenMax.to(M, .2, {
            opacity: 1
        });
        $(".social-item a").popupWindow({
            centerScreen: 1
        });
        $(".rotate-title h2").css("height", _globalViewportH);
        $_body.append($(".rotate-title").addClass("rotate-title-fixed"));
        TweenMax.set(".rotate-title-fixed", {
            x: 100
        });
        TweenMax.to(".rotate-title-fixed", 1, {
            x: 0,
            ease: Expo.easeOut
        });
        i.on("clickoutside", function () {
            if (g.hasClass("js-filter-open")) {
                TweenMax.to(i, .1, {
                    scaleY: 0,
                    ease: Power4.easeOut
                });
                TweenMax.to(i.find("li"), .1, {
                    y: -10,
                    autoAlpha: 0,
                    ease: Power4.easeOut,
                    onComplete: function () {
                        g.removeClass("js-filter-open")
                    }
                })
            }
        });
        o.find(".nav-filter-active").on("click", function () {
            TweenMax.to(i, .75, {
                scaleY: 1,
                ease: Elastic.easeOut.config(1, .8)
            });
            TweenMax.staggerFromTo(i.find("li"), .75, {
                y: -10,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                delay: .15,
                ease: Elastic.easeOut.config(1, 1)
            }, .05, function () {
                g.addClass("js-filter-open")
            })
        });
        o.find(".nav-filter-btn").on("click", function () {
            var e = $(this),
                t = e.attr("data-target");
            if (e.hasClass("js-filter-all") && $_body.hasClass("single-noticias")) {
                var a = e.attr("data-target");
                history.pushState({}, {}, a);
                window.location.reload();
                return false
            }
            g.removeClass("js-filter-open");
            if (o.find(".nav-filter-active").attr("data-active") == e.attr("data-target")) {
                TweenMax.to(i, .1, {
                    scaleY: 0,
                    ease: Power4.easeOut
                });
                TweenMax.to(i.find("li"), .1, {
                    y: -10,
                    autoAlpha: 0,
                    ease: Power4.easeOut
                });
                return false
            }
            $(".nav-filter-active").text(e.text());
            TweenMax.to(i, .1, {
                scaleY: 0,
                ease: Power4.easeOut
            });
            TweenMax.to(i.find("li"), .1, {
                y: -10,
                autoAlpha: 0,
                ease: Power4.easeOut
            });
            if (!e.hasClass("js-all-btn")) {
                var a = e.attr("data-target");
                $.get(a, function (e) {
                    var t = $(e),
                        a = t.find(".nav-sidebar-list li"),
                        o = t.find(".full-page-container .full-page-article");
                    x.html(a);
                    m.html(o)
                });
                history.pushState({}, {}, a);
                window.location.reload()
            }
        })
    };
    var E = function () {
        if (!$_body.hasClass("mobile")) {
            $_window.off("resize.noticiasPage");
            $_window.off("mousemove.noticiasPage");
            g.off("mousewheel.navSidebar");
            m.off("mousewheel.mainContainer");
            $(".rotate-title-fixed").remove()
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.noticiasPage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };

    function O() {
        var e = $(".page-content .iframe-embed iframe");
        e.each(function (e) {
            var t = $(this);
            if (t.parent(".iframe-embed").hasClass("youtube-iframe")) {
                t.css("pointer-events", "none");
                t.attr("src", t.attr("src").replace("?feature=oembed", "?feature=oembed&enablejsapi=1"))
            } else {}
        });
        $(document).on("click", ".iframe-embed", function () {
            var e = $(this);
            if (e.hasClass("youtube-iframe")) {
                if (e.hasClass("js-playing")) {
                    e.removeClass("js-playing");
                    callPlayer(e.attr("id"), "pauseVideo");
                    e.find("iframe").css("pointer-events", "none")
                } else {
                    e.addClass("js-playing");
                    callPlayer(e.attr("id"), "playVideo");
                    e.find("iframe").css("pointer-events", "all")
                }
                var t = e.find("iframe");
                var a = new YT.Player(t[0], {
                    events: {
                        onReady: function () {
                            a.addEventListener("onStateChange", function () {})
                        },
                        onStateChange: function (e) {
                            if (e.data == 2) {
                                callPlayer($(".iframe-embed.js-playing").attr("id"), "pauseVideo");
                                $(".iframe-embed.js-playing").find("iframe").css("pointer-events", "none");
                                $(".iframe-embed.js-playing").removeClass("js-playing")
                            }
                        }
                    }
                })
            } else {
                var o = e.find("iframe")[0];
                var a = new Vimeo.Player(o);
                if (e.hasClass("js-playing")) {
                    e.removeClass("js-playing");
                    a.play()
                } else {
                    e.addClass("js-playing");
                    a.pause()
                }
                a.on("play", function () {
                    e.find("iframe").css("pointer-events", "all")
                });
                a.on("pause", function () {
                    e.find("iframe").css("pointer-events", "none")
                })
            }
        })
    }

    function S() {
        var e = m.attr("data-activeNew"),
            t = $(".nav-sidebar-list");
        v = $(".nav-sidebar-item[data-id='" + e + "']");
        b = $(".full-page-article[data-id='" + e + "']");
        if (v.hasClass("active")) return;
        $(".full-page-article").removeClass("active");
        b.addClass("active");
        w.removeClass("active");
        v.addClass("active");
        var a = v.find("a").attr("href");
        if (_forPopstate) {
            var o = v.find("h3").text() + " | Affinity",
                i = a + f;
            if (d) {
                history.replaceState({}, o, i);
                d = false;
                p = w.index(v)
            } else history.pushState({}, o, i);
            $("head title").html(o);
            if (!$_body.hasClass("mobile")) {
                var n = c.offset.y + v.offset().top - $(".nav-sidebar").offset().top - $(".nav-filter").height() - 40;
                c.scrollTo(0, n, 500);
                s.changeNew(w.index(v), p, c.offset.y)
            } else {
                var n = t.scrollLeft() + v.offset().left - $(".nav-sidebar").offset().left - parseInt(t.css("padding-left"));
                TweenMax.to(t, 1, {
                    scrollTo: {
                        x: n,
                        ease: Power4.easeOut
                    }
                })
            }
        }
    }

    function P(e) {
        r = false;
        if (m.attr("data-nextNews") == "false") return;
        var t = v.next().find("a").attr("href");
        v = v.next();
        $.get(t, function (e) {
            var t = $(e),
                a = t.find(".full-page-article"),
                o = t.find(".full-page-container").attr("data-nextNews"),
                i = t.find(".full-page-container").attr("data-activeNew");
            m.append(a);
            if (o == "true") {
                m.append(C);
                TweenMax.set([C.find(".indicator-wrapper"), C.find("p")], {
                    y: "0px",
                    opacity: 1,
                    ease: Back.easeOut
                });
                TweenMax.set(C.find(".indicator"), {
                    scaleX: 0,
                    transformOrigin: "center left"
                })
            } else {
                C.remove()
            }
            u = 0;
            h = true;
            r = true;
            m.attr("data-activeNew", i);
            var n = {};
            n.element = a;
            n.offsetY = _customScroll.offset.y;
            n.height = a.outerHeight();
            l.push(n);
            _customScroll.update();
            m.attr("data-nextNews", o);
            var s = $(".iframe-embed").find("iframe").attr("width") / $(".iframe-embed").find("iframe").attr("height");
            $(".iframe-embed").find("iframe").attr("width", $(".iframe-embed").width()).attr("height", $(".iframe-embed").width() / s);
            TweenMax.to($(".iframe-embed"), .2, {
                opacity: 1
            });
            $.doTimeout(1e3, function () {
                _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
                _customScroll.scrollTo(0, _customScroll.offset.y + _globalViewportH, 2e3);
                r = true;
                $.doTimeout(2e3, function () {
                    _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/);
                    u = 0;
                    h = true;
                    can_load_next_job = true
                })
            })
        })
    }

    function H() {
        var e = M.find("iframe").attr("width") / M.find("iframe").attr("height");
        M.find("iframe").attr("width", M.width()).attr("height", M.width() / e);
        nav_bar_width = $navJobs.width()
    }

    function A(e) {
        var t = g.offset().top,
            a = $(".full-page-article").eq(0).find(".full-page-article-image").offset().top;
        if (_customScroll == null) {
            var e = {
                offset: {
                    y: -1
                }
            };
            e.offset.y = window.pageYOffset
        }
        if (!_browserObj.isMobile) {
            for (var o = 0, i = l.length; o < i; o++) {
                if (_scrollDirection == "down") {
                    if (l[o].offsetY <= e.offset.y && l[o].element.offset().top > 0 && l[o].element.offset().top < _globalViewportH) {
                        m.attr("data-activeNew", l[o].element.attr("data-id"));
                        S()
                    }
                } else {
                    if (l[o].offsetY <= e.offset.y && l[o].element.offset().top + l[o].height > _globalViewportH && l[o].element.offset().top < _globalViewportH) {
                        m.attr("data-activeNew", l[o].element.attr("data-id"));
                        S()
                    }
                }
            }
        }
        if (!_browserObj.isMobile && !_browserObj.isEdge && !_browserObj.isIE) {
            if (g.hasClass("js-fix-me")) TweenMax.set(g, {
                top: e.offset.y + "px"
            });
            if (t <= 0) {
                g.addClass("js-fix-me")
            } else if (a >= 0 && g.hasClass("js-fix-me")) {
                g.removeClass("js-fix-me")
            }
        }
        if (!_browserObj.isEdge && !_browserObj.isIE && !_browserObj.isMobile) {
            if (e.offset.y >= e.limit.y) {
                if (h) {
                    h = false;
                    $_window.on("mousewheel.scrollNextNew", function (e) {
                        if (n < nav_bar_width) return;
                        clearTimeout($.data(this, "scrollTimer"));
                        $.data(this, "scrollTimer", setTimeout(function () {
                            TweenMax.to(C.find(".indicator"), 1, {
                                scaleX: 0,
                                ease: Expo.easeOut
                            });
                            u = 0
                        }, 1250));
                        TweenMax.set(C.find(".indicator"), {
                            scaleX: u
                        });
                        if (u > 1) {
                            u = 1;
                            h = false;
                            r = true;
                            $_window.off("mousewheel.scrollNextNew");
                            P();
                            TweenMax.staggerTo([C.find(".indicator-wrapper"), C.find("p")], 1, {
                                y: "-25px",
                                opacity: 0,
                                ease: Back.easeOut
                            }, .05)
                        }
                        u += e.originalEvent.deltaY * 4e-4
                    })
                }
            } else {
                TweenMax.to(C.find(".indicator"), 1, {
                    scaleX: 0,
                    ease: Expo.easeOut
                })
            }
        }
    }
    return {
        init: j,
        kill: E
    }
}

function queremosPage(e) {
    if ($_body.hasClass("js-no-ajax")) {
        var t = 0,
            a = 1
    } else {
        var t = .5,
            a = 1.5
    }
    var g = [{
            type: "categoria-filters",
            values: []
        }, {
            type: "cidades-filters",
            values: []
        }, {
            type: "horario-filters",
            values: []
        }, {
            type: "nivel-filters",
            values: []
        }, {
            type: "contrato-filters",
            values: []
        }],
        d = true,
        o = true,
        i = letterMorphParallax($(".place-images svg")),
        n = animateRollingLetters(),
        s = sequenceDance($(".to-section")),
        r = textFireworks({
            element: $(".page-header h2"),
            animationType: "jellyType",
            delay: t
        }),
        l = textFireworks({
            element: $(".page-header h3"),
            animationType: "smoothEntrance",
            delay: a
        }),
        c = textFireworks({
            element: $(".page-footer h2"),
            animationType: "smoothEntrance",
            delay: 0,
            setupArgs: {
                yValue: 100,
                animationTime: .4
            }
        }),
        f = textFireworks({
            element: $(".page-footer h3"),
            animationType: "smoothEntrance",
            delay: .3,
            setupArgs: {
                yValue: 40,
                animationTime: .8
            }
        }),
        p = headerParallax($(".page-header")),
        u = new GlAnimation({
            title: "jobs",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: 1,
            objLetter_ScaleDesktop: .9,
            objGroupX_desktop: -10.5,
            objGroupY_desktop: .5,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: 1,
            objLetter_ScaleMaxDesktop: .9,
            objGroupX_MaxDesktop: -4.5,
            objGroupY_MaxDesktop: .5,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: 1,
            objLetter_ScaleBigDesktop: .9,
            objGroupX_bigDesktop: -8.5,
            objGroupY_bigDesktop: .5,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.55,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: 1,
            mouseInfluence: .65
        });
    var w = $(".navbar-job-filter-wrapper"),
        h = $(".rotate-title h2"),
        v = $(".job-offers"),
        m = $(".to-section"),
        v = $(".job-offers"),
        b = $(".job-items-wrapper"),
        x = $(".js-load-more-jobs"),
        _ = $(".morphing-letter"),
        y = $(".place-images"),
        T = $(".page-footer"),
        M = new TimelineMax({
            paused: true
        }),
        k = $(".cta-start-project"),
        C = k.find(".cta-bg"),
        j = k.find(".morph-bg"),
        E = $(".start-project"),
        O = $(".testimonials-section"),
        S = new A;
    var P = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(L)
            };
            $_window.on("scroll.queremosPage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                L(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        $_body.detach(".rotate-title-fixed");
        h.each(function () {
            var e = $(this);
            e.css("height", e.closest(".container").outerHeight() + "px")
        });
        elasticButtonsInputs();
        S.init();
        D();
        i.init();
        O.slick({
            dots: true,
            dotsClass: "testimonials-dots",
            arrows: false,
            draggable: false,
            cssEase: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            speed: 1e3
        });
        setTimeout(function () {
            $(".slick-slide").css("height", $(".slick-slide").closest(".slick-list").height())
        }, 2e3);
        if (!_browserObj.isMobile) {
            TweenMax.set(v.find(".job-wrapper"), {
                x: _globalViewportW
            });
            s.init();
            c.init();
            f.init();
            u.init(function () {
                $.doTimeout(1e3, function () {
                    r.init();
                    l.init(function () {
                        u.playJobsAnimation()
                    })
                })
            });
            n.init();
            if (!$_html.hasClass("safari")) {
                animateMorphLetters()
            }
            hoverLinksMenu()
        }
    };
    var H = function () {
        if (!$_body.hasClass("mobile")) {
            w.removeClass("js-animated");
            TweenMax.to(w, 1, {
                y: -w.height() - 50,
                ease: Power4.easeInOut
            });
            w.remove();
            p.kill();
            i.kill();
            n.kill();
            s.kill();
            r.kill();
            l.kill();
            c.kill();
            f.kill();
            S.kill();
            if (u) u.kill()
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.queremosPage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };

    function A() {
        this.init = function () {
            var e = 0;
            $.doTimeout(2e3, function () {
                M.to(C.find("path"), 2, {
                    morphSVG: "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z",
                    repeat: -1,
                    yoyo: true,
                    ease: Sine.easeInOut
                });
                e = document.querySelector(".place-images").getBoundingClientRect().top + document.querySelector(".place-images").getBoundingClientRect().height;
                M.play()
            });
            k.find(".elastic-btn").on("click", function () {
                if (!_browserObj.isEdge && !_browserObj.isIE && !_browserObj.isMobile) {
                    _customScroll.scrollTo(0, e, 2e3)
                } else {
                    window.scrollTo(0, e)
                }
            });
            if (!_browserObj.isMobile) {
                C.find("path").hover(function () {
                    M.pause();
                    TweenMax.to(C.find("path"), 2, {
                        morphSVG: "M194.5,272.7C127,149,337.9-26.9,508.9,135.5C639,259,435,253,383.3,365.3C335.6,469,260.7,393.9,194.5,272.7z",
                        ease: Elastic.easeOut.config(1, .5),
                        onComplete: function () {
                            M.stop()
                        }
                    });
                    TweenMax.to(j, 1, {
                        morphSVG: j.attr("data-hover"),
                        ease: Elastic.easeOut.config(1, .5)
                    })
                }, function () {
                    TweenMax.to(C.find("path"), 2, {
                        morphSVG: "M384.7,365.3C289.8,466.1,77.4,279,259.1,135.5C374,44.8,623.8,155.2,573.5,272.7C519.2,399.7,462.9,282.2,384.7,365.3z",
                        ease: Elastic.easeOut.config(1, .5),
                        onComplete: function () {
                            TweenMax.to(C.find("path"), 2, {
                                morphSVG: "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z",
                                repeat: -1,
                                yoyo: true,
                                ease: Sine.easeInOut
                            })
                        }
                    });
                    TweenMax.to(j, 1, {
                        morphSVG: "M23 0h112a23 23 0 1 1 0 46H23a23 23 0 1 1 0-46z",
                        ease: Elastic.easeOut.config(1, .5)
                    })
                })
            }
            TweenMax.to(k.find(".cta-bg path"), 1, {
                morphSVG: k.find(".cta-bg path").attr("data-init"),
                ease: Elastic.easeOut.config(1, .7),
                autoAlpha: 1,
                delay: 1.5
            });
            TweenMax.to(k.find("h3"), 1, {
                scale: 1,
                ease: Elastic.easeOut.config(1, .7),
                autoAlpha: 1,
                delay: 1.8,
                force3D: true
            });
            TweenMax.to(k.find(".elastic-btn svg"), 1, {
                ease: Elastic.easeOut.config(1, .7),
                scale: 1,
                autoAlpha: 1,
                delay: 1.9,
                force3D: true
            });
            TweenMax.to(k.find(".elastic-btn span"), 1, {
                scale: 1,
                ease: Elastic.easeOut.config(1, .7),
                autoAlpha: 1,
                delay: 2,
                force3D: true
            });
            if (!_browserObj.isMobile) {
                _scrollY = 0;
                E.css("top", _scrollY + _globalViewportH - E.outerHeight() - 125);
                $_window.on("resize.startProject", $.debounce(500, t))
            }

            function t() {
                E.css("top", _scrollY + _globalViewportH - E.outerHeight() - 125)
            }
        };
        this.kill = function () {
            $_window.off("resize.startProject");
            TweenMax.set([j, C.find("path"), k.find(".cta-bg path"), k.find("h3"), k.find(".elastic-btn svg"), k.find(".elastic-btn span"), E, E.find(".form-container")], {
                clearProps: "all"
            })
        }
    }

    function D() {
        var t = "",
            p = "";
        $_body.append($(".navbar-job-filter-wrapper").clone(true));
        w.remove();
        w = $(".navbar-job-filter-wrapper");
        var s = w.find(".option-wrapper:not(.active-option)"),
            r = w.find(".option-wrapper.active-option"),
            e = w.find(".filter-column"),
            l = w.find(".navbar-job-filter"),
            c = w.find(".open-filter"),
            f = w.find(".close-filter"),
            u = w.find(".check .dash")[0].getTotalLength(),
            a = v.attr("data-jobsOffset"),
            o = v.attr("data-jobsOffset");
        x.on("click", function () {
            var e = $(this);
            t = window.location.search;
            t = t.replace("?", "");
            if (!t) t = "?offset=" + v.attr("data-jobsOffset");
            else t = "?offset=" + v.attr("data-jobsOffset") + "&" + t;
            $.get("/wp-json/affinity/v1/jobs/get-jobs" + t, function (e) {
                var t = $(e["html"]),
                    a = Math.round((v.find(".job-wrapper").length + t.length) / 2) * (v.find(".job-wrapper").outerHeight() + parseInt(v.find(".job-wrapper").css("margin-bottom")));
                TweenMax.to(v.find(".job-items-wrapper").parent(), .5, {
                    height: a + "px",
                    ease: Expo.easeOut,
                    onComplete: function () {
                        TweenMax.set(t, {
                            opacity: 0,
                            x: _globalViewportW
                        });
                        v.find(".job-items-wrapper").append(t);
                        v.attr("data-jobsOffset", Number(v.attr("data-jobsOffset")) + Number(v.attr("data-jobsPosts")));
                        TweenMax.set(t, {
                            opacity: 1
                        });
                        TweenMax.staggerTo(t, .7, {
                            x: 0,
                            ease: Elastic.easeOut.config(1, 1.5)
                        }, .05, function () {
                            d = true
                        })
                    }
                });
                if (!e["have_next"]) {
                    TweenMax.to(x, 1, {
                        scale: 0,
                        ease: Elastic.easeIn.config(1, .9)
                    })
                } else {
                    TweenMax.to(x, 1, {
                        scale: 1,
                        ease: Elastic.easeIn.config(1, .9)
                    })
                }
            })
        });
        w.on("clickoutside", function () {
            var e = $(this);
            if (!e.hasClass("js-open")) return false;
            f.click()
        });
        c.on("click", function () {
            var e = $(this),
                t = e.parent(),
                a = e.find(".morph-bg"),
                o = e.find(".morph-element"),
                i = e.find(".hidden-path")[0].getBoundingClientRect().width / 2;
            if (e.parent().parent().hasClass("js-open")) {
                if (d) {
                    n();
                    f.click()
                }
                return false
            }
            e.parent().parent().addClass("js-open");
            $_body.append("<span class='job-filter-overlay'></span>");
            _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
            TweenMax.to(w, .4, {
                height: w.data("height-block"),
                ease: Power4.easeInOut
            });
            TweenMax.to(l.find(".option-wrapper:not(.active-option)"), .5, {
                y: "0px",
                autoAlpha: 1
            });
            TweenMax.to(r, .2, {
                y: "10px",
                autoAlpha: 0
            });
            TweenMax.fromTo(f, .2, {
                scale: 0,
                transformOrigin: "center center"
            }, {
                scale: 1,
                transformOrigin: "center center",
                autoAlpha: 1
            });
            TweenMax.to($(".job-filter-overlay"), .2, {
                autoAlpha: 1
            });
            e.addClass("js-btn-clicked");
            TweenMax.to(a, 1, {
                morphSVG: a.attr("data-click"),
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to(o, 1, {
                morphSVG: o.attr("data-click"),
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.set(e.find(".text-wrapper"), {
                autoAlpha: 1,
                onComplete: function () {
                    TweenMax.to(e.find(".text-wrapper .text"), 1, {
                        y: "0%",
                        ease: Elastic.easeOut.config(1, .7)
                    })
                },
                delay: .2
            });
            TweenMax.to(t, 1, {
                x: _globalViewportW / 2 - t.width() / 2 - i,
                ease: Elastic.easeOut.config(1, .7)
            })
        });
        f.on("click", function (e) {
            var t = $(this),
                a = t.parent(),
                o = c.find(".morph-bg"),
                i = c.find(".morph-element"),
                n = c.find(".morph-bg")[0].getBoundingClientRect().width / 2;
            if (!w.hasClass("js-open")) return false;
            if (e.hasOwnProperty("originalEvent")) {
                g = [{
                    type: "categoria-filters",
                    values: []
                }, {
                    type: "cidades-filters",
                    values: []
                }, {
                    type: "horario-filters",
                    values: []
                }, {
                    type: "level-filters",
                    values: []
                }, {
                    type: "contrato-filters",
                    values: []
                }];
                p = m()
            }
            TweenMax.to(w, .4, {
                height: "91px",
                ease: Power4.easeInOut,
                onComplete: function () {
                    t.parent().parent().removeClass("js-open")
                }
            });
            TweenMax.to(l.find(".option-wrapper:not(.active-option)"), .5, {
                y: "10px",
                autoAlpha: 0
            });
            TweenMax.to(r, .2, {
                y: "0px",
                autoAlpha: 1
            });
            TweenMax.fromTo(f, .2, {
                scale: 1,
                transformOrigin: "center center"
            }, {
                scale: 0,
                transformOrigin: "center center",
                autoAlpha: 0
            });
            TweenMax.to($(".job-filter-overlay"), .2, {
                autoAlpha: 0,
                onComplete: function () {
                    $(".job-filter-overlay").remove();
                    _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
                }
            });
            TweenMax.to(o, 1, {
                morphSVG: o.attr("data-original"),
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to(i, 1, {
                morphSVG: i.attr("data-original"),
                ease: Elastic.easeOut.config(1, .7)
            });
            TweenMax.to(c.find(".text-wrapper .text"), .5, {
                y: "100%",
                ease: Elastic.easeOut.config(1, .7),
                onComplete: function () {
                    TweenMax.set(c.find(".text-wrapper"), {
                        autoAlpha: 0
                    });
                    c.removeClass("js-btn-clicked");
                    s.each(function () {
                        var e = $(this);
                        if (e.hasClass("active")) {
                            e.click()
                        }
                    })
                }
            });
            TweenMax.to(a, 1, {
                x: _globalViewportW / 2 - a.width() / 2 - c.data("path-width"),
                ease: Elastic.easeOut.config(1, .7)
            })
        });
        s.on("click", function (e) {
            var t = $(this),
                a = t.closest(".filter-column");
            p = "";
            t.toggleClass("active");
            if (t.hasClass("active")) {
                var o = t.find(".option").attr("data-cat"),
                    i = t.find(".option").attr("data-catSlug");
                for (var n = 0, s = g.length; n < s; n++) {
                    if (g[n].type == o) {
                        g[n].values.push(i);
                        p = m()
                    }
                }
                TweenMax.to(t.find(".check .stroke"), .4, {
                    opacity: 0
                });
                TweenMax.to(t.find(".check .full"), .4, {
                    opacity: 1
                });
                TweenMax.to(t.find(".check .dash"), .4, {
                    strokeDashoffset: 0
                });
                var r = t.text();
                var l = a.find(".option-wrapper").filter(".active").length - 1;
                if (l < 0) var c = "Todos";
                else if (l > 0) var c = r + " + " + l;
                else var c = r;
                a.find(".active-option").text(c)
            } else {
                var o = t.find(".option").attr("data-cat"),
                    i = t.find(".option").attr("data-catSlug");
                for (var n = 0, s = g.length; n < s; n++) {
                    if (g[n].type == o) {
                        var f = g[n].values.indexOf(i);
                        g[n].values.splice(f, 1);
                        if (e.hasOwnProperty("originalEvent")) {
                            p = m()
                        }
                    }
                }
                TweenMax.to(t.find(".check .stroke"), .4, {
                    opacity: 1
                });
                TweenMax.to(t.find(".check .full"), .4, {
                    opacity: 0
                });
                TweenMax.to(t.find(".check .dash"), .4, {
                    strokeDashoffset: u
                });
                var d = a.find(".option-wrapper.active").length - 1,
                    r = a.find(".option-wrapper.active").eq(d).text();
                var l = a.find(".option-wrapper").filter(".active").length - 1;
                if (l < 0) var c = "Todos";
                else if (l > 0) var c = r + " + " + l;
                else var c = r;
                a.find(".active-option").text(c)
            }
            h()
        });

        function h() {
            _loadingBlob.init();
            $.get("/wp-json/affinity/v1/jobs/get-jobs-count" + p, function (e) {
                $(".open-filter .text .number").text("(" + e + ")");
                _loadingBlob.kill()
            })
        }

        function n() {
            _loadingBlob.init();
            $.get("/wp-json/affinity/v1/jobs/get-jobs" + p, function (e) {
                var t = $(e["html"]),
                    a = Math.round((1 + t.length) / 2) * (v.find(".job-wrapper").outerHeight() + parseInt(v.find(".job-wrapper").css("margin-bottom")));
                _loadingBlob.kill();
                v.attr("data-jobsOffset", Number(v.attr("data-jobsPosts")));
                TweenMax.set(t, {
                    opacity: 0,
                    x: _globalViewportW
                });
                TweenMax.staggerTo(v.find(".job-link:not(.job-spontaneous)"), 1, {
                    x: _globalViewportW,
                    ease: Elastic.easeIn.config(1, 1.5)
                }, .05, function () {
                    TweenMax.to(v.find(".job-items-wrapper").parent(), .5, {
                        height: a + "px",
                        ease: Expo.easeOut
                    });
                    v.find(".job-link:not(.job-spontaneous)").remove();
                    v.find(".job-items-wrapper").append(t);
                    TweenMax.set(t, {
                        opacity: 1
                    });
                    TweenMax.staggerTo(t, .7, {
                        x: 0,
                        ease: Elastic.easeOut.config(1, 1.5)
                    }, .05, function () {
                        d = true
                    });
                    if (!e["have_next"]) {
                        TweenMax.to(x, 1, {
                            scale: 0,
                            ease: Elastic.easeIn.config(1, .9)
                        })
                    } else {
                        TweenMax.to(x, 1, {
                            scale: 1,
                            ease: Elastic.easeIn.config(1, .9)
                        })
                    }
                })
            })
        }

        function m() {
            var e = "",
                t = false,
                a = 0;
            for (var o = 0, i = g.length; o < i; o++)
                if (g[o].values.length) a++;
            if (a == 0) {
                history.pushState({}, {}, window.location.pathname);
                return e
            }
            for (var o = 0, i = g.length; o < i; o++) {
                if (g[o].values.length) {
                    t = true;
                    if (a > 1 && o > 0) e += "&";
                    for (var n = 0, s = g[o].values.length; n < s; n++) {
                        if (n == 0) e += g[o].type + "=" + g[o].values[n];
                        else e += g[o].values[n];
                        if (s > 1 && n + 1 < s) e += ","
                    }
                }
            }
            if (t) e = "?" + e;
            if (_forPopstate) history.pushState({}, {}, e);
            return e
        }
    }

    function L(e) {
        if (!_browserObj.isMobile) {
            if (_scrollY > 10 && !$_pageHeader.hasClass("js-paused")) {
                $_pageHeader.addClass("js-paused");
                u.pause()
            }
            if (_scrollY < 10 && $_pageHeader.hasClass("js-paused")) {
                $_pageHeader.removeClass("js-paused");
                u.resume()
            }
            if (verge.inViewport(v, -500) && !v.hasClass("js-animated")) {
                v.addClass("js-animated");
                TweenMax.staggerTo(v.find(".job-wrapper"), 1, {
                    x: 0,
                    ease: Elastic.easeOut.config(1, 1.5)
                }, .05)
            }
            if (verge.inViewport(m, -100) && !m.hasClass("js-animated")) {
                m.addClass("js-animated");
                s.animate()
            }
            if (verge.inViewport($(".job-offers"), -_globalViewportH / 3) && !w.hasClass("js-animated")) {
                w.addClass("js-animated");
                TweenMax.to(w, 1, {
                    y: 0,
                    ease: Power4.easeInOut
                })
            } else if (!verge.inViewport($(".job-offers"), -_globalViewportH / 3) && w.hasClass("js-animated")) {
                w.removeClass("js-animated");
                TweenMax.to(w, 1, {
                    y: -w.height() - 150,
                    ease: Power4.easeInOut
                })
            }
        }
        if (!_browserObj.isMobile) {
            if (!_browserObj.isSafari) {
                _.each(function () {
                    var e = $(this);
                    if (verge.inViewport(e) && !e.hasClass("js-animated")) {
                        e.addClass("js-animated");
                        e.data("animation").play()
                    } else if (!verge.inViewport(e) && e.hasClass("js-animated")) {
                        e.removeClass("js-animated");
                        e.data("animation").stop()
                    }
                })
            }
        }
        if (!_browserObj.isPhone) {
            if (verge.inViewport(y, -_globalViewportH)) {
                i.animateIn()
            }
            if (verge.inViewport($_pageFooter, -_globalViewportH / 3) && !$_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.addClass("js-animated-2");
                $_pageFooter.addClass("add-bg-color");
                $_pageFooter.prev("section").addClass("add-bg-color");
                $.doTimeout(250, function () {
                    c.animate();
                    f.animate();
                    $.doTimeout(250, function () {
                        if (!$_body.hasClass("mobile")) {
                            n.animate()
                        }
                    })
                })
            } else if (!verge.inViewport($_pageFooter, -_globalViewportH / 3) && $_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.removeClass("js-animated-2");
                $_pageFooter.removeClass("add-bg-color");
                $_pageFooter.prev("section").removeClass("add-bg-color");
                n.pause()
            }
        }
    }
    return {
        init: P,
        kill: H
    }
}

function singleQueremosPage(e) {
    var s = window.location.search,
        r = true,
        l = 0,
        c = [],
        r = true,
        f = true,
        d = false,
        n = 0,
        p = 0,
        u = null,
        h = $_body.hasClass("single-queremos");
    var m = $(".full-page-container"),
        g = $(".nav-sidebar"),
        w = $(".nav-sidebar-item.active"),
        v = $(".full-page-article"),
        b = $(".nav-sidebar-item"),
        w = $(".nav-sidebar-item.active"),
        t = $(".nav-sidebar-scroll"),
        a = $(".rotate-title h2"),
        x = $(".load-next-wrapper");
    if (!$_body.hasClass("mobile")) {
        u = Scrollbar.init(t[0], {
            speed: .8,
            syncCallbacks: true
        });
        u.addListener(function (e) {
            if (!$_html.hasClass("edge") && !$_html.hasClass("ie")) {
                TweenMax.set($(".nav-filter"), {
                    top: e.offset.y + "px"
                })
            }
        })
    }
    var o = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(M)
            };
            $_window.on("scroll.singleQueremosPage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                M(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        p = g.width();
        $_window.on("mousemove.singleCarreirasPage", $.debounce(100, function (e) {
            n = e.clientX
        }));
        $_window.on("resize.singleCarreirasPage", $.debounce(50, _));
        g.on("mousewheel.navSidebar", function (e, t) {
            if (_customScroll) _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/)
        });
        m.on("mousewheel.mainContainer", function (e, t) {
            if (_customScroll) _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
        });
        TweenMax.set(x.find(".indicator"), {
            scaleX: 0,
            transformOrigin: "center left"
        });
        $_headerMain.find("#nav-main li[data-controller='queremos-te-page']").addClass("active");
        $_body.detach(".rotate-title-fixed");
        a.each(function () {
            var e = $(this);
            e.css("height", e.closest(".container").outerHeight() + "px")
        });
        elasticButtonsInputs();
        m.find(".full-page-article").each(function () {
            var e = $(this),
                t = {};
            t.element = e;
            t.offsetY = e.offset().top;
            t.height = e.outerHeight();
            c.push(t)
        });
        y();
        initForm($(".contact-form"));
        if (!$_body.hasClass("mobile")) {
            hoverLinksMenu()
        }
        $(".rotate-title h2").css("height", _globalViewportH);
        $_body.append($(".rotate-title").addClass("rotate-title-fixed"));
        TweenMax.set(".rotate-title-fixed", {
            x: 100
        });
        TweenMax.to(".rotate-title-fixed", 1, {
            x: 0,
            ease: Expo.easeOut
        })
    };
    var i = function () {
        if (!$_body.hasClass("mobile")) {
            $(".rotate-title-fixed").remove();
            g.off("mousewheel.navSidebar");
            m.off("mousewheel.mainContainer");
            $_window.off("mousemove.singleCarreirasPage");
            $_window.off("resize.singleCarreirasPage")
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.singleQueremosPage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };
    var _ = function () {
        p = g.width()
    };

    function y() {
        if ($_body.hasClass("espontanea")) return;
        var e = m.attr("data-activeJob"),
            t = $(".nav-sidebar-list");
        w = $(".nav-sidebar-item[data-id='" + e + "']");
        v = $(".full-page-article[data-id='" + e + "']");
        if (w.hasClass("active")) return;
        $(".full-page-article").removeClass("active");
        v.addClass("active");
        b.removeClass("active");
        w.addClass("active");
        var a = w.find("a").attr("href");
        if (_forPopstate) {
            var o = w.find("h3").text() + " | Affinity",
                i = a + s;
            if (!r) {
                history.pushState({}, o, i)
            } else {
                r = false
            }
            $("head title").html(o);
            if (!$_body.hasClass("mobile")) {
                var n = u.offset.y + w.offset().top - $(".nav-sidebar").offset().top - $(".nav-filter").height() - 40;
                u.scrollTo(0, n, 500)
            } else {
                if (!$_body.hasClass("espontanea")) {
                    var n = t.scrollLeft() + w.offset().left - $(".nav-sidebar").offset().left - parseInt(t.css("padding-left"));
                    TweenMax.to(t, 1, {
                        scrollTo: {
                            x: n,
                            ease: Power4.easeOut
                        }
                    })
                }
            }
        }
    }

    function T(e) {
        d = false;
        if (m.attr("data-nextJob") == "false") return;
        var t = w.next().find("a").attr("href");
        w = w.next();
        $.get(t, function (e) {
            var t = $(e),
                a = m.find(".full-page-article"),
                o = t.find(".full-page-article"),
                i = t.find(".full-page-container").attr("data-nextJob"),
                n = t.find(".full-page-container").attr("data-activeJob");
            m.append(o);
            $_headerMain.find(".desktop-language .other-languages").html($(e).find(".desktop-language .other-languages li"));
            $_headerMain.find("#nav-main-mobile .other-languages").html($(e).find("#nav-main-mobile .other-languages li"));
            initForm(o.find(".contact-form"));
            elasticButtonsInputs(o.find(".elastic-btn"));
            if (i == "true") {
                m.append(x);
                TweenMax.set([x.find(".indicator-wrapper"), x.find("p")], {
                    y: "0px",
                    opacity: 1,
                    ease: Back.easeOut
                });
                TweenMax.set(x.find(".indicator"), {
                    scaleX: 0,
                    transformOrigin: "center left"
                })
            } else {
                x.remove()
            }
            m.attr("data-activeJob", n);
            var s = {};
            s.element = o;
            s.offsetY = _customScroll.offset.y;
            s.height = o.outerHeight();
            c.push(s);
            m.attr("data-nextJob", i);
            var r = $(".iframe-embed").find("iframe").attr("width") / $(".iframe-embed").find("iframe").attr("height");
            $(".iframe-embed").find("iframe").attr("width", $(".iframe-embed").width()).attr("height", $(".iframe-embed").width() / r);
            TweenMax.to($(".iframe-embed"), .2, {
                opacity: 1
            });
            $.doTimeout(1e3, function () {
                _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
                _customScroll.update();
                _customScroll.scrollTo(0, _customScroll.offset.y + _globalViewportH, 2e3);
                $.doTimeout(2250, function () {
                    _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/);
                    l = 0;
                    f = true;
                    d = true
                })
            })
        })
    }

    function M(e) {
        if (!h) return;
        if (_customScroll == null) {
            var e = {
                offset: {
                    y: -1
                }
            };
            e.offset.y = window.pageYOffset
        }
        if (!_browserObj.isMobile) {
            for (var t = 0, a = c.length; t < a; t++) {
                if (_scrollDirection == "down") {
                    if (c[t].offsetY <= e.offset.y && c[t].element.offset().top > 0 && c[t].element.offset().top < _globalViewportH) {
                        m.attr("data-activeJob", c[t].element.attr("data-id"));
                        y()
                    }
                } else {
                    if (c[t].offsetY <= e.offset.y && c[t].element.offset().top + c[t].height > _globalViewportH && c[t].element.offset().top < _globalViewportH) {
                        m.attr("data-activeJob", c[t].element.attr("data-id"));
                        y()
                    }
                }
            }
        }
        if (!_browserObj.isEdge && !_browserObj.isIE && !_browserObj.isMobile) {
            if (e.offset.y >= e.limit.y) {
                if (f) {
                    f = false;
                    $_window.on("mousewheel.scrollNextJob", function (e) {
                        if (n < p) return;
                        clearTimeout($.data(this, "scrollTimer"));
                        $.data(this, "scrollTimer", setTimeout(function () {
                            TweenMax.to(x.find(".indicator"), 1, {
                                scaleX: 0,
                                ease: Expo.easeOut
                            });
                            l = 0
                        }, 250));
                        TweenMax.set(x.find(".indicator"), {
                            scaleX: l
                        });
                        if (l > 1) {
                            l = 1;
                            d = true;
                            $_window.off("mousewheel.scrollNextJob");
                            T();
                            TweenMax.staggerTo([x.find(".indicator-wrapper"), x.find("p")], 1, {
                                y: "-25px",
                                opacity: 0,
                                ease: Back.easeOut
                            }, .05)
                        }
                        l += e.originalEvent.deltaY * 2e-4
                    })
                }
            } else {
                TweenMax.to(x.find(".indicator"), 1, {
                    scaleX: 0,
                    ease: Expo.easeOut
                })
            }
        }
        var o = g.offset().top,
            i = $(".full-page-article-header").offset().top + $(".full-page-article-header").height() + 110;
        if (g.hasClass("js-fix-me")) TweenMax.set(g, {
            top: e.offset.y + "px"
        });
        if (o <= 0) {
            g.addClass("js-fix-me")
        } else if (i >= 0 && g.hasClass("js-fix-me")) {
            g.removeClass("js-fix-me")
        }
    }
    return {
        init: o,
        kill: i
    }
}

function singleServicePage() {
    var t = Te(),
        a = new ye,
        o = new _e,
        e = new $e,
        v = "";
    var n = $(".reasons-list-wrapper"),
        s = $(".cases-studies"),
        b = $(".navbar-services-wrapper").detach(),
        r = $(".svg-scale"),
        l = $(".client-logo"),
        c = $(".image-blocks"),
        f = $(".main-conditions-titles"),
        d = $(".js-height"),
        p = $(".morphing-letter"),
        u = $(".technologies"),
        h = $(".vertical-menu-wrapper"),
        m = $(".statistics"),
        g = b.height(),
        w = false,
        x, _ = null,
        y = true,
        T = true,
        M = false,
        k = false,
        C = false,
        j = false,
        E = [],
        O = [],
        S, P = $(".start-project"),
        H = $(".close-filter"),
        A = $(".cta-start-project"),
        D = A.find(".morph-bg"),
        L = P.find("input"),
        I = $(".morph-enter-button"),
        V = $(".option-wrapper"),
        F = $(".start-project-container"),
        R = $(".input-area"),
        G = $(".input-area.active"),
        B = $(".testimonials-section"),
        Y = $(".feedback-form"),
        z = A.find(".cta-bg"),
        W = $(".reminder"),
        q = $(".wrapper-input"),
        X = $(".enter-button"),
        N = $(".loader-wrapper"),
        U = $(".map-wrapper"),
        Z = $(".map-wrapper .map-svg"),
        u = $(".technologies"),
        J = new TimelineMax({
            paused: true
        }),
        Q = A.outerHeight(),
        K = R.outerHeight(true),
        ee = Y.outerHeight(true),
        te = null,
        ae, oe = false,
        ie = buroParallaxScroll(),
        ne = P.find("form").outerHeight(),
        se = P.find("form").outerHeight(),
        re = Me($_pageToLoad.attr("data-bodyClass").split(" ")[1]);
    if ($_body.hasClass("nearshoring")) {
        var le = $(".steps-container"),
            ce = $(".recruitment .image-wrapper"),
            fe = $(".our-model"),
            de = $(".model-line-container"),
            P = $(".start-project"),
            H = $(".close-filter"),
            A = $(".cta-start-project"),
            D = A.find(".morph-bg"),
            L = P.find("input"),
            I = $(".morph-enter-button"),
            V = $(".option-wrapper"),
            F = $(".start-project-container"),
            R = $(".input-area"),
            G = $(".input-area.active"),
            B = $(".testimonials-section"),
            Y = $(".feedback-form"),
            z = A.find(".cta-bg"),
            W = $(".reminder"),
            q = $(".wrapper-input"),
            X = $(".enter-button"),
            N = $(".loader-wrapper"),
            U = $(".map-wrapper"),
            u = $(".technologies"),
            J = new TimelineMax({
                paused: true
            }),
            Q = A.outerHeight(),
            K = R.outerHeight(true),
            pe = fe.outerHeight(),
            ee = Y.outerHeight(true),
            te = null,
            ae, oe = false,
            ne = P.find("form").outerHeight(),
            se = P.find("form").outerHeight(),
            ue = fe.offset().top,
            he = de.find("svg path")[0].getTotalLength(),
            me = de.outerHeight(),
            ge = de.offset().top
    }
    if ($_body.hasClass("nearshoring")) {
        var S = new GlAnimation({
            title: "nearshoring",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: .95,
            objText_ScaleDesktop: 16,
            objLetter_ScaleDesktop: .94,
            objExtra1_ScaleDesktop: 2.35,
            objExtra2_ScaleDesktop: .035,
            objExtra2_Y_ScaleDesktop: -26,
            objGroupX_desktop: 0,
            objGroupY_desktop: 1.2,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: .95,
            objText_ScaleMaxDesktop: 16,
            objLetter_ScaleMaxDesktop: .94,
            objExtra1_ScaleMaxDesktop: 2.35,
            objExtra2_ScaleMaxDesktop: .035,
            objExtra2_Y_ScaleMaxDesktop: -26,
            objGroupX_MaxDesktop: 0,
            objGroupY_MaxDesktop: 1.2,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: .95,
            objText_ScaleBigDesktop: 16,
            objLetter_ScaleBigDesktop: .94,
            objExtra1_ScaleBigDesktop: 2.35,
            objExtra2_ScaleBigDesktop: .035,
            objExtra2_Y_ScaleBigDesktop: -26,
            objGroupX_bigDesktop: 0,
            objGroupY_bigDesktop: 1.2,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.1,
            owlAniTime: 2,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: 1,
            mouseInfluence: .8
        })
    } else if ($_body.hasClass("software")) {
        var S = new GlAnimation({
            title: "software",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: .95,
            objText_ScaleDesktop: 8.1,
            objLetter_ScaleDesktop: .94,
            objExtra1_ScaleDesktop: 10.35,
            objExtra2_ScaleDesktop: .04,
            objExtra2_Y_ScaleDesktop: -26,
            objGroupX_desktop: 0,
            objGroupY_desktop: 1.2,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: .95,
            objText_ScaleMaxDesktop: 8.1,
            objLetter_ScaleMaxDesktop: .94,
            objExtra1_ScaleMaxDesktop: 10.35,
            objExtra2_ScaleMaxDesktop: .04,
            objExtra2_Y_ScaleMaxDesktop: -26,
            objGroupX_MaxDesktop: 0,
            objGroupY_MaxDesktop: 1.2,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: .95,
            objText_ScaleBigDesktop: 8.1,
            objLetter_ScaleBigDesktop: .94,
            objExtra1_ScaleBigDesktop: 10.35,
            objExtra2_ScaleBigDesktop: .035,
            objExtra2_Y_ScaleBigDesktop: -26,
            objGroupX_bigDesktop: 0,
            objGroupY_bigDesktop: 1.2,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.1,
            extra1Animation: 3,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: 1,
            mouseInfluence: .8
        })
    } else {
        var S = new GlAnimation({
            title: "outsourcing",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: .95,
            objText_ScaleDesktop: 16,
            objLetter_ScaleDesktop: .94,
            objExtra1_ScaleDesktop: 3.5,
            objExtra2_ScaleDesktop: .04,
            objExtra2_Y_ScaleDesktop: -26,
            objGroupX_desktop: 0,
            objGroupY_desktop: 1.2,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: .95,
            objText_ScaleMaxDesktop: 16,
            objLetter_ScaleMaxDesktop: .94,
            objExtra1_ScaleMaxDesktop: 3.5,
            objExtra2_ScaleMaxDesktop: .04,
            objExtra2_Y_ScaleMaxDesktop: -26,
            objGroupX_MaxDesktop: 0,
            objGroupY_MaxDesktop: 1.2,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: .95,
            objText_ScaleBigDesktop: 16,
            objLetter_ScaleBigDesktop: .94,
            objExtra1_ScaleBigDesktop: 3.5,
            objExtra2_ScaleBigDesktop: .035,
            objExtra2_Y_ScaleBigDesktop: -26,
            objGroupX_bigDesktop: 0,
            objGroupY_bigDesktop: 1.2,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.1,
            extra1Animation: 2,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: 1,
            mouseInfluence: .8
        })
    }
    var we = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(Ee)
            };
            $_window.on("scroll.singleServicePage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                Ee(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        v = window.location.search;
        v = v.replace("?", "").split("=")[1];
        if ($_body.hasClass("nearshoring")) {
            Ce()
        }
        $_body.detach(".rotate-title-fixed");
        if (!$_body.hasClass("mobile")) {
            hoverLinksMenu();
            ie.init()
        }
        $_body.append(b);
        $_headerMain.find("#nav-main li[data-controller='fazemos-page']").addClass("active");
        $_headerMain.find("#nav-main-mobile li[data-controller='fazemos-page']").addClass("active");
        if ($(".start-project-container")) {
            e.init()
        }
        $.doTimeout(1e3, function () {
            if (!_browserObj.isMobile) {
                a.init();
                if ($_body.hasClass("nearshoring")) {
                    o.init();
                    me = de.outerHeight();
                    ge = de.offset().top
                }
            }
        });
        if (!$_body.hasClass("mobile")) {
            TweenMax.to($_body.find(".main-logo"), .5, {
                opacity: 1
            });
            TweenMax.to($_body.find(".language-wrapper"), .5, {
                opacity: 1
            });
            TweenMax.to($_pageHeader.find(".background-image"), .5, {
                opacity: 1
            });
            if ($_body.hasClass("js-no-ajax")) {
                S.init()
            } else {
                $.doTimeout(0, function () {
                    S.init()
                })
            }
            TweenMax.to($_pageHeader.find(".js-pet"), 2.5, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut,
                delay: .2
            })
        }
        u.find("li").hover(function () {
            var e = $(this),
                t = e.attr("data-hover");
            x = e.find("img").attr("src");
            e.find("img").attr("src", t)
        }, function () {
            var e = $(this);
            e.find("img").attr("src", x)
        });
        l.hover(function () {
            var e = $(this),
                t = e.attr("data-hover");
            _ = e.find("img").attr("src");
            e.find("img").attr("src", t)
        }, function () {
            var e = $(this);
            e.find("img").attr("src", _)
        });
        f.find("li").on("click", function () {
            var e = $(this),
                t = e.attr("data-target");
            if (y) {
                y = false;
                f.find("li").removeClass("active");
                e.addClass("active");
                TweenMax.staggerTo($(".conditions-wrapper").filter(".active").find(".condition"), .6, {
                    y: 50,
                    opacity: 0,
                    ease: Elastic.easeInOut.config(1, .8)
                }, .1, function () {
                    $(".conditions-wrapper").filter(".active").removeClass("active")
                });
                TweenMax.staggerTo($("." + t + "").find(".condition"), .6, {
                    y: 0,
                    opacity: 1,
                    ease: Elastic.easeInOut.config(1, .8)
                }, .1, function () {
                    setTimeout(function () {
                        $("." + t + "").addClass("active");
                        y = true
                    }, 100)
                })
            }
        });
        $.doTimeout(1e3, function () {
            je();
            elasticButtonsInputs();
            statisticsAnimation();
            t.init()
        });
        if (!$_body.hasClass("mobile")) {
            $.doTimeout(1e3, function () {
                animateMorphLetters()
            });
            n.find("li").each(function () {
                var e = $(this);
                TweenMax.set(e.find("svg path"), {
                    "stroke-dashoffset": e.find("svg path")[0].getTotalLength(),
                    "stroke-dasharray": e.find("svg path")[0].getTotalLength()
                });
                TweenMax.set(e.find("p"), {
                    y: "40px",
                    opacity: 0
                })
            })
        }
        b.find("a").on("click", function () {
            TweenMax.to(b, .6, {
                y: -b.height() - 50,
                ease: Power4.easeInOut,
                onComplete: function () {
                    b.remove()
                }
            })
        });
        if ($_body.hasClass("nearshoring")) {
            B.slick({
                dots: true,
                dotsClass: "testimonials-dots",
                arrows: false,
                draggable: false,
                cssEase: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                speed: 1e3,
                centerMode: true
            });
            setTimeout(function () {
                $(".slick-slide").css("height", $(".slick-slide").closest(".slick-list").height())
            }, 2e3)
        }
    };
    var ve = function () {
        if (!$_body.hasClass("mobile")) {
            re.kill();
            ie.kill();
            if (S) S.kill()
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.singleServicePage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
        b.remove();
        a.kill();
        if ($_body.hasClass("nearshoring")) {
            o.kill()
        }
        if ($(".start-project-container")) {
            e.kill()
        }
    };

    function be() {
        var a = $(".clients"),
            o = $(".clients article"),
            e = $(".blob"),
            i = $(".drag-helper:not(.drag-left)"),
            n = $(".drag-helper.drag-left"),
            t = o.length,
            s = false,
            r = 0,
            l = 0,
            c = 0,
            f = 0,
            d = 0,
            p;
        var u = function () {
            $_window.on("resize.carouselClients", $.debounce(1e3, m));
            if (a.find("article li").length <= 9) {
                e.css("display", "none");
                i.css("display", "none")
            }
            $(".clients-wrapper").css({
                height: a.outerHeight() - e.outerHeight() / 2 + "px"
            });
            o.each(function () {
                var e = $(this),
                    t = e.index();
                if (t == 0) {
                    d = 0;
                    o.eq(d).addClass("active")
                } else {
                    if ($_window.width() < 1650) {
                        d = 350
                    } else if ($_window.width() < 1440) {
                        d = 450
                    } else {
                        d = 500
                    }
                }
                e.css({
                    left: $(this).outerWidth() * t - d * t
                })
            });
            e.hover(function () {
                var e = $(this);
                TweenMax.to(e, 1, {
                    scale: 1,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                })
            }, function () {
                var e = $(this);
                TweenMax.to(e, 1, {
                    scale: .7,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                })
            });
            e.on("mouseleave", function () {
                if (s == false) {
                    return
                }
                var e = $(this);
                p == e.attr("data-direction");
                TweenMax.to(e.find("path"), 1, {
                    morphSVG: e.find("path").attr("data-original"),
                    ease: Expo.easeOut
                });
                TweenMax.to(e, 1, {
                    x: 0,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                });
                if (f < t && p == "right") {
                    f++;
                    TweenMax.to(a.find(".clients-wrapper"), .6, {
                        x: "+=" + (-o.outerWidth() + d),
                        ease: Power2.easeOut
                    });
                    a.find("article.active").removeClass("active");
                    a.find("article").eq(f).addClass("active")
                }
                if (f > 0 && p == "left") {
                    f--;
                    TweenMax.to(a.find(".clients-wrapper"), .6, {
                        x: "-=" + (-o.outerWidth() + d),
                        ease: Power2.easeOut
                    });
                    a.find("article.active").removeClass("active");
                    a.find("article").eq(f).addClass("active");
                    TweenMax.to($(".blob-right"), 1, {
                        x: 0,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    })
                }
                if (f < 1) {
                    TweenMax.to($(".blob-left"), 1, {
                        x: -450,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(n, 1, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(n.find("svg"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(n.find("h4"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    })
                }
                if (f > 0) {
                    TweenMax.to($(".blob-left"), 1, {
                        x: 0,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(n, 1, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                if (f > t - 2) {
                    TweenMax.to($(".blob-right"), 1, {
                        x: 450,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(i, 1, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(i.find("svg"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(i.find("h4"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    })
                } else {
                    TweenMax.to(i, 1, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                r = 0;
                s = false
            });
            e.on("mousedown", function (e) {
                s = true;
                l = e.pageX;
                var t = $(this);
                p = t.attr("data-direction");
                TweenMax.to(t.find("path"), 1, {
                    morphSVG: "M.4 336.83C12 50.47 263 8.05 493 .28S915 146.62 921.65 344.5 747.26 708.75 517.24 716.87C268.47 725.64-12 643.92.4 336.83z",
                    ease: Expo.easeOut
                })
            });
            e.on("mouseup", function () {
                TweenMax.to(i.find("svg"), .3, {
                    x: 0,
                    force3D: true,
                    ease: Power2.easeOut
                });
                TweenMax.to(i.find("h4"), .3, {
                    x: 0,
                    force3D: true,
                    ease: Power2.easeOut
                });
                var e = $(this);
                TweenMax.to(e.find("path"), 1, {
                    morphSVG: e.find("path").attr("data-original"),
                    ease: Expo.easeOut
                });
                TweenMax.to(e, 1, {
                    x: 0,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                });
                r = 0;
                s = false;
                l = 0
            });
            e.on("mousemove", function (e) {
                var t = $(this);
                p = t.attr("data-direction");
                if (s) {
                    if (p == "right") {
                        c = l - e.pageX;
                        if (c > 150) c = 150;
                        if (c < 0) {
                            c = 0
                        }
                        r = c;
                        TweenMax.to(t, .3, {
                            x: -r,
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(i.find("svg"), .3, {
                            x: -(r + r / 2),
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(i.find("h4"), .3, {
                            x: -(r + r / 4),
                            force3D: true,
                            ease: Power2.easeOut
                        })
                    } else {
                        c = e.pageX;
                        if (c > 200) c = 50;
                        if (c < 0) {
                            c = 0
                        }
                        r = c;
                        TweenMax.to(t, .3, {
                            x: r,
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(n.find("svg"), .3, {
                            x: r + r / 2,
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(n.find("h4"), .3, {
                            x: r + r / 4,
                            force3D: true,
                            ease: Power2.easeOut
                        })
                    }
                } else {
                    TweenMax.to(t, 1, {
                        x: 0,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    r = 0
                }
            })
        };
        var h = function () {
            $_window.off("resize.carouselClients")
        };

        function m() {
            $(".clients-wrapper").css({
                height: a.outerHeight() - e.outerHeight() / 2 + "px"
            });
            o.each(function () {
                var e = $(this),
                    t = e.index();
                if (t == 0) {
                    d = 0;
                    o.eq(d).addClass("active")
                } else {
                    if ($_window.width() < 1650) {
                        d = 350
                    } else if ($_window.width() < 1440) {
                        d = 450
                    } else {
                        d = 500
                    }
                }
                e.css({
                    left: $(this).outerWidth() * t - d * t
                });
                TweenMax.to(a.find(".clients-wrapper"), .6, {
                    x: 0,
                    ease: Power2.easeOut
                });
                o.removeClass("active");
                o.eq(0).addClass("active");
                TweenMax.to($(".blob-left"), 1, {
                    x: -450,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to($(".blob-right"), 1, {
                    x: 0,
                    ease: Elastic.easeOut.config(1, .7)
                });
                f = 0
            })
        }
        u();
        return {
            init: u,
            kill: h
        }
    }

    function xe() {
        var e = $(".clients"),
            a = $(".clients article"),
            t = $(".blob"),
            o = $(".drag-helper:not(.drag-left)"),
            i = $(".drag-helper.drag-left"),
            n = a.length,
            s = false,
            r = 0,
            l = 0,
            c = 0,
            f = 0,
            d = 0,
            p;
        var u = function () {
            if (e.find("article li").length <= 9) {
                t.css("display", "none");
                o.css("display", "none")
            }
            if ($_body.hasClass("phone")) {
                setTimeout(function () {
                    $(".clients-wrapper").css({
                        height: e.find("article").first().find("li").first().outerHeight() * 7 + "px"
                    })
                }, 4e3)
            } else {
                setTimeout(function () {
                    $(".clients-wrapper").css({
                        height: e.outerHeight() - t.outerHeight() / 2 + "px"
                    })
                }, 4e3)
            }
            a.each(function () {
                var e = $(this),
                    t = e.index();
                if (t == 0) {
                    d = 0;
                    a.eq(d).addClass("active")
                } else {
                    if ($_window.width() < 1650) {
                        d = 350
                    } else {
                        d = 0
                    }
                    if ($_window.width() < 1440) {
                        d = 450
                    }
                    if ($_window.width() <= 1024) {
                        d = 0
                    }
                }
                e.css({
                    left: $(this).outerWidth() * t - d * t
                })
            });
            a.on("swiperight", function () {
                if (f > 0) {
                    f--;
                    TweenMax.to(e.find(".clients-wrapper"), .6, {
                        x: "-=" + (-a.outerWidth() + d),
                        ease: Power2.easeOut
                    });
                    e.find("article.active").removeClass("active");
                    e.find("article").eq(f).addClass("active");
                    TweenMax.to(o, .6, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                if (f == 0) {
                    TweenMax.to(i, .6, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            });
            a.on("swipeleft", function () {
                if (f < n - 1) {
                    f++;
                    TweenMax.to(e.find(".clients-wrapper"), .6, {
                        x: "+=" + (-a.outerWidth() + d),
                        ease: Power2.easeOut
                    });
                    e.find("article.active").removeClass("active");
                    e.find("article").eq(f).addClass("active");
                    TweenMax.to(i, .6, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                if (f == n - 1) {
                    TweenMax.to(o, .6, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            })
        };
        u();
        return {
            init: u
        }
    }
    if (!$_body.hasClass("mobile")) be();
    else xe();

    function _e() {
        this.init = function () {
            TweenMax.set(de.find("svg path"), {
                strokeDashoffset: he
            });
            TweenMax.set(de.find("svg path"), {
                strokeDasharray: he
            });
            le.each(function (e) {
                var t = $(this),
                    a = {};
                a.element = t;
                a.offset = t.offset().top + 50;
                a.height = t.outerHeight(true), a.index = e;
                O.push(a)
            });
            if (!_browserObj.isMobile) {
                $_window.on("resize.affinitySteps", $.debounce(500, e))
            }
            O[3].offset += 100
        };
        this.animate = function (e) {
            if (e > ge - _globalViewportH / 2 && e < ge + me - _globalViewportH / 2) {
                var t = he - normalizedValue(_scrollY - ge + _globalViewportH / 2, me, 0) * he;
                TweenMax.set(de.find("svg path"), {
                    strokeDashoffset: t
                });
                if (t <= 0) {
                    de.addClass("done");
                    return false
                }
                for (var a = 0; a < O.length; a++) {
                    if (_scrollY > O[a].offset - _globalViewportH / 2 - O[a].height) {
                        le.find(".step").filter(".background-blue").removeClass("background-blue");
                        le.eq(a).find(".step").addClass("background-blue");
                        TweenMax.to(le.eq(a).find(".step"), 1, {
                            scale: 1,
                            opacity: 1,
                            ease: Elastic.easeOut.config(1, .8)
                        });
                        TweenMax.to(le.eq(a).find(".step h2"), 2, {
                            y: 0,
                            opacity: 1,
                            delay: .2,
                            ease: Elastic.easeOut.config(1, .8)
                        });
                        TweenMax.to(le.eq(a).find(".step h3"), 2, {
                            y: 0,
                            opacity: 1,
                            delay: .4,
                            ease: Elastic.easeOut.config(1, .8)
                        });
                        TweenMax.to(le.eq(a).find(".step p"), 2, {
                            y: 0,
                            opacity: 1,
                            delay: .6,
                            ease: Elastic.easeOut.config(1, .8)
                        })
                    }
                }
            }
        };

        function e() {
            he = de.find("svg path")[0].getTotalLength();
            le.each(function (e) {
                var t = $(this),
                    a = t.offset().top;
                O[e] = a
            })
        }
        this.kill = function () {
            $_window.off("resize.affinitySteps")
        }
    }

    function ye() {
        this.init = function () {
            d.each(function (e) {
                var t = $(this),
                    a = {};
                a.element = t;
                a.offset = t.offset().top;
                a.height = t.outerHeight();
                a.lineWidth = h.find("li").eq(d.length - 1 - e).find(".container-height").outerWidth();
                E.push(a)
            });
            h.find("li").click(function () {
                var e = $(this),
                    t = e.index();
                e.prevAll("li").addClass("active");
                e.addClass("active");
                if (_customScroll) {
                    _customScroll.scrollTo(0, E[E.length - 1 - t].offset, 2e3, function () {
                        _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
                    })
                } else {
                    $("html, body").animate({
                        scrollTop: E[E.length - 1 - t].offset
                    }, 1e3)
                }
            });
            $_window.on("resize.verticalMenu", $.debounce(500, e))
        };
        this.animateSection = function (e) {
            for (var t = 0; t < E.length; t++) {
                if (e > E[t].offset && e < E[t].offset + E[t].height) {
                    var a = normalizedValue(e - E[t].offset, E[t].height, 0);
                    h.find("li").eq(E.length - 1 - t).addClass("active");
                    TweenMax.set(h.find("li").eq(E.length - 1 - t).find(".container-height"), {
                        scaleX: a,
                        force3D: true
                    })
                }
                if (e < E[t].offset) {
                    h.find("li").eq(E.length - 1 - t).removeClass("active");
                    TweenMax.set(h.find("li").eq(E.length - 1 - t).find(".container-height"), {
                        scaleX: 0,
                        force3D: true
                    })
                }
            }
        };
        this.show = function () {
            TweenMax.staggerTo(h.find("li"), 1, {
                y: 0,
                ease: Elastic.easeOut.config(1, .8)
            }, .1);
            h.addClass("enable")
        };
        this.hide = function () {
            TweenMax.staggerTo(h.find("li"), 1, {
                y: -200,
                ease: Elastic.easeOut.config(1, .8)
            }, .1);
            h.removeClass("enable")
        };
        this.kill = function () {
            $_window.off("resize.verticalMenu")
        };

        function e() {
            E = [];
            d.each(function (e) {
                var t = $(this),
                    a = {};
                a.element = t;
                a.offset = t.offset().top;
                a.height = t.outerHeight();
                a.lineWidth = h.find("li").eq(d.length - 1 - e).find(".container-height").outerWidth();
                E.push(a)
            })
        }
    }

    function $e() {
        this.init = function () {
            if ($("body").hasClass("outsourcing")) {
                P.find("form").attr("data-type", "outsourcing")
            } else if ($("body").hasClass("nearshoring")) {
                P.find("form").attr("data-type", "nearshore")
            } else {
                P.find("form").attr("data-type", "software")
            }
            if (_browserObj.isPhone) {
                for (var i = 0; i < 3; i++) {
                    R.eq(i).removeClass("hidden")
                }
            }
            $.doTimeout(2e3, function () {
                J.to(z.find("path"), 2, {
                    morphSVG: "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z",
                    repeat: -1,
                    yoyo: true,
                    ease: Sine.easeInOut
                });
                J.play()
            });
            if (!_browserObj.isMobile) {
                z.find("path").hover(function () {
                    J.pause();
                    TweenMax.to(z.find("path"), 2, {
                        morphSVG: "M194.5,272.7C127,149,337.9-26.9,508.9,135.5C639,259,435,253,383.3,365.3C335.6,469,260.7,393.9,194.5,272.7z",
                        ease: Elastic.easeOut.config(1, .5),
                        onComplete: function () {
                            J.stop()
                        }
                    });
                    TweenMax.to(D, 1, {
                        morphSVG: D.attr("data-hover"),
                        ease: Elastic.easeOut.config(1, .5)
                    })
                }, function () {
                    TweenMax.to(z.find("path"), 2, {
                        morphSVG: "M384.7,365.3C289.8,466.1,77.4,279,259.1,135.5C374,44.8,623.8,155.2,573.5,272.7C519.2,399.7,462.9,282.2,384.7,365.3z",
                        ease: Elastic.easeOut.config(1, .5),
                        onComplete: function () {
                            TweenMax.to(z.find("path"), 2, {
                                morphSVG: "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z",
                                repeat: -1,
                                yoyo: true,
                                ease: Sine.easeInOut
                            })
                        }
                    });
                    TweenMax.to(D, 1, {
                        morphSVG: "M23 0h112a23 23 0 1 1 0 46H23a23 23 0 1 1 0-46z",
                        ease: Elastic.easeOut.config(1, .5)
                    })
                })
            }
            TweenMax.to(A.find(".cta-bg path"), 1, {
                morphSVG: A.find(".cta-bg path").attr("data-init"),
                ease: Elastic.easeOut.config(1, .7),
                autoAlpha: 1,
                delay: 1.5
            });
            TweenMax.to(A.find("h3"), 1, {
                scale: 1,
                ease: Elastic.easeOut.config(1, .7),
                autoAlpha: 1,
                delay: 1.8,
                force3D: true
            });
            TweenMax.to(A.find(".elastic-btn svg"), 1, {
                ease: Elastic.easeOut.config(1, .7),
                scale: 1,
                autoAlpha: 1,
                delay: 1.9,
                force3D: true
            });
            TweenMax.to(A.find(".elastic-btn span"), 1, {
                scale: 1,
                ease: Elastic.easeOut.config(1, .7),
                autoAlpha: 1,
                delay: 2,
                force3D: true
            });
            if (!_browserObj.isMobile) {
                _scrollY = 0;
                P.css("top", _scrollY + _globalViewportH - P.outerHeight() - 125);
                $_window.on("resize.startProject", $.debounce(500, e))
            }

            function e() {
                P.css("top", _scrollY + _globalViewportH - P.outerHeight() - 125)
            }
            V.on("click", function () {
                var e = $(this),
                    t = e.attr("data-city");
                V.removeClass("done");
                TweenMax.to(V.find(".stroke"), 1, {
                    fill: "#006cfc",
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to(V.find(".full"), 1, {
                    opacity: 0,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to(V.find(".dash"), 1, {
                    strokeDashoffset: 23,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to(e.find(".full"), 1, {
                    opacity: 1,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to(e.find(".dash"), 1, {
                    strokeDashoffset: 0,
                    ease: Elastic.easeOut.config(1, .7)
                });
                e.addClass("done");
                j = true;
                $("#location").attr("data-final-city", t);
                TweenMax.to(I, 1, {
                    opacity: 1,
                    pointerEvents: "all",
                    ease: Elastic.easeOut.config(1, .7)
                })
            });
            L.on("keydown", function () {
                var e = $(this),
                    t = e.attr("data-text");
                if ($.trim($(this).val()) != t) {
                    TweenMax.to(e.closest(R).find(X), 1, {
                        autoAlpha: 1,
                        ease: Elastic.easeOut.config(1, .7),
                        onComplete: function () {
                            k = false
                        }
                    })
                }
                if (_browserObj.isPhone) {
                    TweenMax.set(P, {
                        y: _scrollY + _globalViewportH - P.outerHeight()
                    })
                }
            });
            L.filter(".number").on("keyup", function (e) {
                if (/\D/g.test(this.value)) {
                    this.value = this.value.replace(/\D/g, "")
                }
                if (this.value.length > 0) {
                    M = true
                } else {
                    M = false
                }
            });
            $(document).on("keydown", function (e) {
                switch (e.which) {
                    case 27:
                        if (P.find(".project-form").hasClass("js-open-form")) H.click();
                        TweenMax.to(z.find("path"), 2, {
                            morphSVG: "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z",
                            repeat: -1,
                            yoyo: true,
                            ease: Sine.easeInOut
                        });
                    case 13:
                        P.find(".input-area.active").find(X).click();
                    default:
                        break
                }
            });
            X.on("click", function () {
                var e = $(this),
                    t = R.index(e.closest(R));
                if (e.closest(R).find("input").hasClass("email")) {
                    var a = e.closest(R).find("input.email").val();
                    if (/(.+)@(.+){2,}\.(.+){2,}/.test(a)) {
                        k = true;
                        e.closest(q).removeClass("error")
                    } else {
                        k = false;
                        e.removeClass("disable");
                        e.closest(q).addClass("error")
                    }
                } else {
                    k = true
                }
                if (e.closest(R).find("input").hasClass("number")) {
                    if (M) {
                        e.closest(q).removeClass("error");
                        TweenMax.to(e, 1, {
                            autoAlpha: 0,
                            ease: Elastic.easeOut.config(1, .7),
                            onComplete: function () {
                                k = true
                            }
                        })
                    }
                }
                if ($.trim(e.closest(R).find("input").val()).length == 0) {
                    e.closest(R).find(q).addClass("error");
                    k = false
                } else {
                    if (k) {
                        e.closest(R).removeClass("active");
                        e.closest(R).attr("data-text", $.trim(e.closest(R).find("input").val()));
                        e.closest(R).find(q).removeClass("error");
                        TweenMax.to(e, 1, {
                            autoAlpha: 0,
                            ease: Elastic.easeOut.config(1, .7),
                            onComplete: function () {
                                k = true
                            }
                        });
                        if (e.closest(R).next() && e.closest(R).next().hasClass("hidden")) {
                            e.closest(R).next().removeClass("hidden");
                            e.closest(R).next().addClass("active");
                            ne += K;
                            if (ne <= _globalViewportH * .7) {
                                TweenMax.to(P.find("form"), 1, {
                                    height: ne,
                                    ease: Elastic.easeOut.config(1, .7)
                                });
                                if (!_browserObj.isMobile) {
                                    if (!$_html.hasClass("edge") || !$_html.hasClass("ie")) {
                                        TweenMax.to(P, 1, {
                                            top: _scrollY + _globalViewportH - P.outerHeight() - 125 - K,
                                            ease: Elastic.easeOut.config(1, .7)
                                        })
                                    } else {
                                        TweenMax.to(P, 1, {
                                            top: -K,
                                            ease: Elastic.easeOut.config(1, .7)
                                        })
                                    }
                                } else {
                                    if ($_window.width() > 768 && $_window.width() < 1025) {
                                        TweenMax.to(P, 1, {
                                            top: -K,
                                            ease: Elastic.easeOut.config(1, .7)
                                        })
                                    }
                                }
                            } else {
                                te = Scrollbar.init(P.find("form")[0], {
                                    speed: .8,
                                    syncCallbacks: true,
                                    alwaysShowTracks: true
                                });
                                P.find("form").addClass("js-scroll")
                            }
                            $.doTimeout(100, function () {
                                e.closest(R).next().find("input").focus();
                                if (te) {
                                    te.update();
                                    te.scrollTo(0, 1e3, 800)
                                }
                            })
                        }
                    }
                }
            });
            H.on("click", function () {
                F.css({
                    "pointer-events": "none"
                });
                if (!T) {
                    T = true;
                    TweenMax.to(P, 1, {
                        autoAlpha: 0,
                        ease: Elastic.easeOut.config(1, .7),
                        y: 0,
                        pointerEvents: "none"
                    });
                    TweenMax.to(A.find(".cta-bg path"), 1, {
                        morphSVG: A.find(".cta-bg path").attr("data-init"),
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 1,
                        delay: .2,
                        onComplete: function () {
                            TweenMax.to(z.find("path"), 2, {
                                morphSVG: "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z",
                                repeat: -1,
                                yoyo: true,
                                ease: Sine.easeInOut
                            })
                        }
                    });
                    TweenMax.to(A.find("h3"), 1, {
                        scale: 1,
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 1,
                        delay: .4,
                        force3D: true
                    });
                    TweenMax.to(A.find(".elastic-btn svg"), 1, {
                        ease: Elastic.easeOut.config(1, .7),
                        scale: 1,
                        autoAlpha: 1,
                        delay: .5,
                        force3D: true
                    });
                    TweenMax.to(A.find(".elastic-btn span"), 1, {
                        scale: 1,
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 1,
                        delay: .6,
                        force3D: true
                    });
                    TweenMax.to(H, .1, {
                        scale: .85,
                        rotation: 180,
                        opacity: 0,
                        ease: Elastic.easeOut.config(1, .7),
                        pointerEvents: "none",
                        force3D: true
                    });
                    TweenMax.to(P.find(".form-container"), .1, {
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 0,
                        scale: .9,
                        force3D: true
                    });
                    P.find(".project-form").removeClass("js-open-form");
                    if (_browserObj.isPhone && !$_headerMain.hasClass("js-drop")) {
                        TweenMax.to($_headerMain, 1, {
                            y: 0,
                            ease: Elastic.easeOut.config(1, .7)
                        })
                    }
                    if (_browserObj.isPhone) {
                        $_window.scrollTop(0)
                    }
                    if (_globalViewportW <= 640) {
                        TweenMax.set(P, {
                            y: 0
                        });
                        if (_browserObj.isPhone) {
                            disableBodyScroll(false)
                        }
                    }
                }
            });
            z.find("path").on("click", function () {
                F.css({
                    "pointer-events": "all"
                });
                J.stop();
                if (T) {
                    if (W.hasClass("show")) {
                        TweenMax.to(W, 1, {
                            autoAlpha: 0,
                            scale: .9,
                            className: "-=show",
                            ease: Elastic.easeOut.config(1, .07)
                        })
                    }
                    T = false;
                    oe = true;
                    P.find(".project-form").addClass("js-open-form");
                    TweenMax.to(A.find(".cta-bg path"), 1, {
                        morphSVG: A.find(".cta-bg path").attr("data-close"),
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 0
                    });
                    TweenMax.to(A.find("h3"), 1, {
                        scale: .9,
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 0,
                        force3D: true
                    });
                    TweenMax.to(A.find("h3"), 1, {
                        scale: .9,
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 0,
                        force3D: true
                    });
                    TweenMax.to(A.find(".elastic-btn span"), 1, {
                        scale: .9,
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 0,
                        force3D: true
                    });
                    TweenMax.to(A.find(".elastic-btn svg"), 1, {
                        ease: Elastic.easeOut.config(1, .7),
                        scale: .9,
                        autoAlpha: 0,
                        force3D: true
                    });
                    TweenMax.to(P, 1, {
                        autoAlpha: 1,
                        ease: Elastic.easeOut.config(1, .7),
                        pointerEvents: "all"
                    });
                    TweenMax.to(H, 1, {
                        scale: 1,
                        rotation: 0,
                        opacity: 1,
                        ease: Elastic.easeOut.config(1, .7),
                        pointerEvents: "all",
                        force3D: true
                    });
                    TweenMax.to(P.find(".form-container"), 1, {
                        ease: Elastic.easeOut.config(1, .7),
                        autoAlpha: 1,
                        scale: 1,
                        delay: .1,
                        force3D: true
                    });
                    if (_browserObj.isPhone) {
                        TweenMax.to($_headerMain, 1, {
                            y: -$_headerMain.outerHeight(),
                            ease: Elastic.easeOut.config(1, .7)
                        })
                    }
                    $.doTimeout(400, function () {
                        R.eq(0).find("input").focus();
                        if (_browserObj.isPhone) {
                            disableBodyScroll(true)
                        }
                    });
                    if (_browserObj.isPhone) {
                        if (_scrollY > 0) {
                            TweenMax.set(P, {
                                y: _scrollY + _globalViewportH - P.find("form").outerHeight() - $_headerMain.outerHeight()
                            })
                        }
                    }
                }
            });
            P.find(".project-form").on("submit", function (e) {
                var t = $(this);
                e.stopImmediatePropagation();
                e.preventDefault();
                e.stopPropagation();
                if (validateForm(P.find(".project-form")) && !P.find(".project-form").hasClass("sending") && j) {
                    P.find(".project-form").addClass("sending");
                    R.find("input").css("pointer-events", "none");
                    V.css("pointer-events", "none");
                    TweenMax.to(I.find(".morph-bg"), .4, {
                        opacity: 0,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(I.find(".arrow"), .4, {
                        opacity: 0,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(I.find(".text"), .4, {
                        opacity: 0,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(N, 1, {
                        opacity: 1,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    V.each(function () {
                        var e = $(this);
                        if (!e.hasClass("done") && !j) {
                            TweenMax.to(e.find(".stroke"), 1, {
                                fill: "red",
                                ease: Elastic.easeOut.config(1, .7)
                            })
                        }
                    });
                    var a = {
                        _wp_http_referer: P.find(".project-form").find("input[name='_wp_http_referer']").val(),
                        affinity_nonce: P.find(".project-form").find("input[name='affinity_nonce']").val(),
                        language: P.find(".project-form").find("#language").val(),
                        project_name: P.find(".project-form").find("#name").val(),
                        project_email: P.find(".project-form").find("#email").val(),
                        project_company: P.find(".project-form").find("#company").val(),
                        project_size: P.find(".project-form").find("#company-size").val(),
                        project_city: P.find(".project-form").find("#location").attr("data-final-city"),
                        project_type: P.find("form").attr("data-type")
                    };

                    function o() {
                        P.find(".project-form").removeClass("sending");
                        P.find(".project-form")[0].reset();
                        if (P.find(".project-form").hasClass("js-open-form")) H.click();
                        TweenMax.to(X, 1, {
                            autoAlpha: 1,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        q.find("input").css("pointer-events", "all");
                        TweenMax.to(P.find("form"), 1, {
                            height: se,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        for (i = 1; i <= 5; i++) {
                            R.eq(i).addClass("hidden")
                        }
                        if (te) {
                            te.setPosition(0, 0);
                            Scrollbar.destroy(P.find("form")[0])
                        }
                        P.find("form").removeClass("js-scroll");
                        ne = se;
                        V.removeClass("done");
                        q.removeClass("erro, error");
                        TweenMax.to(V.find(".full"), 1, {
                            opacity: 0,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        TweenMax.to(V.find(".dash"), 1, {
                            strokeDashoffset: 23,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        j = false;
                        $("#location").attr("data-final-city", null);
                        TweenMax.to(I, 1, {
                            opacity: .5,
                            pointerEvents: "none",
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        Y.css("padding-bottom", 0);
                        TweenMax.to(Y, 1, {
                            autoAlpha: 0,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        TweenMax.to(I.find(".morph-bg"), .4, {
                            opacity: 1,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        TweenMax.to(I.find(".arrow"), .4, {
                            opacity: 1,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        TweenMax.to(I.find(".text"), .4, {
                            opacity: 1,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        R.find("input").css("pointer-events", "all");
                        V.css("pointer-events", "all");
                        $.doTimeout(1e3, function () {
                            if (!_browserObj.isMobile) {
                                P.css("top", _scrollY + _globalViewportH - P.outerHeight() - 125)
                            } else {
                                TweenMax.to(P, 1, {
                                    y: 0,
                                    ease: Elastic.easeOut.config(1, .7)
                                })
                            }
                        })
                    }
                    submitJSON("startProject", a, function (e) {
                        Y.css("padding-bottom", "150px");
                        TweenMax.to(Y, 1, {
                            autoAlpha: 1,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        TweenMax.to(N, 1, {
                            opacity: 0,
                            ease: Elastic.easeOut.config(1, .7)
                        });
                        if (te != null) {
                            te.update();
                            te.scrollTo(0, 1e3, 800, function () {
                                $.doTimeout(1500, function () {
                                    o()
                                })
                            })
                        } else {
                            TweenMax.to(P.find("form"), 1, {
                                height: ne + ee + 40,
                                ease: Elastic.easeOut.config(1, .7)
                            });
                            if (!_browserObj.isMobile) {
                                TweenMax.to(P, 1, {
                                    top: _scrollY + _globalViewportH - P.outerHeight() - 125 - ee - 40,
                                    ease: Elastic.easeOut.config(1, .7)
                                })
                            }
                            $.doTimeout(1500, function () {
                                o()
                            })
                        }
                    }, function () {})
                }
            })
        };
        this.kill = function () {
            $_window.off("resize.startProject");
            TweenMax.set([D, z.find("path"), A.find(".cta-bg path"), A.find("h3"), H, A.find(".elastic-btn svg"), A.find(".elastic-btn span"), P, P.find(".form-container"), I.find(".morph-bg"), I.find(".arrow"), I.find(".text"), N, Y, I], {
                clearProps: "all"
            });
            if ($(".project-form").length != 0) {
                $(".project-form")[0].reset()
            }
        }
    }

    function Te() {
        var c = $(".cases-studies"),
            e = $(".cases-studies ul li"),
            r = e.filter(".active"),
            t = r.find(".case-letter").clone(),
            f = $(".fazemos-lightbox"),
            a = $(".cases-studies ul li.active .case-letter"),
            o = $(".fazemos-lightbox .elastic-btn"),
            d = $(".case-studies-lightbox-content"),
            l = $(".next-prev-slider-helper .slider-helper"),
            p = null,
            u = d.find(".case-item").eq(0),
            h = {
                active: {},
                next: {},
                prev: {},
                all: [],
                total: {}
            };
        var i = function () {
            if (d.length <= 0) return;
            d.find(".case-item").each(function (e) {
                var t = $(this),
                    a = {};
                a.element = t;
                a.index = e;
                a.image = t.find("img").attr("src");
                a.case_subject = t.find(".case-subject").text();
                a.case_title = t.find(".case-title").text();
                a.case_text = t.find(".case-text").text();
                a.morph_path = t.find(".morph-letter svg path").attr("d");
                h.all.push(a)
            });
            h.active = 0;
            h.prev = null;
            h.next = 1;
            h.total = Number(d.find(".case-item").length);
            if (d.find(".case-item").length > 1) {
                TweenMax.to(l.filter(".next-slide").find("svg path"), .5, {
                    morphSVG: h.all[h.next].morph_path,
                    ease: Elastic.easeOut.config(1, .8)
                });
                l.filter(".next-slide").find("svg path").attr("data-current", h.all[h.next].morph_path);
                l.filter(".next-slide").find("h3").text(h.all[h.next].case_title);
                TweenMax.set(t, {
                    top: "65%",
                    right: "initial",
                    left: "0px",
                    rotation: 120,
                    scale: 0
                })
            } else {
                TweenMax.set(l.filter(".next-slide"), {
                    autoAlpha: 0
                })
            }
            TweenMax.set(r.find(".case-letter"), {
                scale: 0
            });
            r.find(".case-study-image").prepend(t);
            TweenMax.set(l.filter(".prev-slide"), {
                x: "-120%"
            });
            if (v) {
                m($(".case-studies-lightbox-content li[data-slug='" + v + "']").attr("data-id"))
            }
            r.find(".case-study-info button").on("click", function () {
                var e = r.attr("data-id");
                history.pushState({}, {}, "?case-study=" + r.attr("data-slug"));
                m(e)
            });
            o.on("click", function () {
                g()
            });
            l.on("mouseenter", function () {
                var e = $(this);
                TweenMax.to(e.find("svg path"), 1, {
                    morphSVG: "M7.738,102.134c4.597,61.825,41.883,70.919,91.681,70.919c49.797,0,73.231-34.722,73.231-77.552 c0-42.833-23.435-77.479-73.231-77.553C45.564,17.868,2.805,35.829,7.738,102.134z",
                    ease: Elastic.easeOut.config(1, .8)
                })
            });
            l.on("mouseleave", function () {
                var e = $(this);
                TweenMax.to(e.find("svg path"), 1, {
                    morphSVG: e.find("svg path").attr("data-current"),
                    ease: Elastic.easeOut.config(1, .8)
                })
            });
            l.on("click", function () {
                var e = $(this),
                    t = Number(e.attr("data-id"));
                if (e.hasClass("next-slide")) s(t, "next");
                else s(t, "prev")
            });
            $(document).on("keydown.casesSlider", function (e) {
                switch (e.which) {
                    case 39:
                        if (h.next != null) s(h.next, "next");
                        break;
                    case 37:
                        if (h.prev != null) s(h.prev, "prev");
                        break;
                    default:
                        break
                }
            })
        };
        var n = function () {
            TweenMax.staggerTo([a, t], 4, {
                scale: 1,
                ease: Elastic.easeOut.config(1, .7)
            }, .4)
        };
        var s = function (e, t) {
            var a = d.find(".case-item").eq(e),
                o = a.find(".slider li").eq(0).find("img").clone(),
                i = a.find(".case-subject").clone(),
                n = a.find(".case-title").clone(),
                s = a.find(".case-text").clone();
            u = d.find(".case-item").eq(r.attr("data-id"));
            r.attr("data-id", e);
            r.attr("data-slug", a.attr("data-slug"));
            r.find(".block-bg-cover picture").append(o);
            TweenMax.to([r.find(".case-study-info .case-subject"), r.find(".case-study-info .case-title"), r.find(".case-study-info .case-text")], 1, {
                y: "-20px",
                opacity: 0,
                ease: Power4.easeOut,
                onComplete: function () {
                    r.find(".case-study-info .case-subject").remove();
                    r.find(".case-study-info .case-title").remove();
                    r.find(".case-study-info .case-text").remove();
                    TweenMax.set([i, n, s], {
                        opacity: 0,
                        y: "20px"
                    });
                    r.find(".case-study-info").prepend(s).prepend(n).prepend(i);
                    TweenMax.to([r.find(".case-study-info .case-subject"), r.find(".case-study-info .case-title"), r.find(".case-study-info .case-text")], 1, {
                        opacity: 1,
                        y: "0px",
                        ease: Power4.easeOut
                    })
                }
            });
            if (t == "next") {
                if (h.next != null) {
                    h.prev = h.active;
                    h.active = h.next;
                    if (h.total - 1 == e) {
                        h.next = null;
                        TweenMax.to(l.filter(".next-slide"), 1, {
                            x: "120%",
                            ease: Power4.easeOut
                        });
                        l.filter(".next-slide").attr("data-id", h.next)
                    } else {
                        h.next = h.next + 1;
                        l.filter(".next-slide").attr("data-id", h.next);
                        TweenMax.to(l.filter(".next-slide").find("svg path"), 1, {
                            morphSVG: h.all[h.next].morph_path,
                            ease: Elastic.easeOut.config(1, .8)
                        });
                        l.filter(".next-slide").find("svg path").attr("data-current", h.all[h.next].morph_path);
                        TweenMax.to(l.filter(".next-slide").find("h3"), .5, {
                            y: "-10px",
                            opacity: 0,
                            ease: Power4.easeOut,
                            onComplete: function () {
                                l.filter(".next-slide").find("h3").text(h.all[h.next].case_title);
                                TweenMax.fromTo(l.filter(".next-slide").find("h3"), .5, {
                                    y: "5px",
                                    opacity: 0
                                }, {
                                    y: "0px",
                                    opacity: 1,
                                    ease: Power4.easeOut
                                })
                            }
                        })
                    }
                    TweenMax.to(l.filter(".prev-slide").find("svg path"), 1, {
                        morphSVG: h.all[h.prev].morph_path,
                        ease: Elastic.easeOut.config(1, .8)
                    });
                    l.filter(".prev-slide").find("svg path").attr("data-current", h.all[h.prev].morph_path);
                    TweenMax.to(l.filter(".prev-slide").find("h3"), .25, {
                        y: "-5px",
                        opacity: 0,
                        ease: Power4.easeOut,
                        onComplete: function () {
                            l.filter(".prev-slide").find("h3").text(h.all[h.prev].case_title);
                            TweenMax.fromTo(l.filter(".prev-slide").find("h3"), .25, {
                                y: "5px",
                                opacity: 0
                            }, {
                                y: "0px",
                                opacity: 1,
                                ease: Power4.easeOut
                            })
                        }
                    });
                    l.filter(".prev-slide").attr("data-id", h.prev);
                    TweenMax.to(l.filter(".prev-slide"), 1, {
                        x: "0%",
                        ease: Power4.easeOut
                    })
                }
                TweenMax.fromTo($(".case-study-image .case-background-morph"), 1, {
                    x: "0%"
                }, {
                    x: "-100%",
                    ease: Expo.easeOut,
                    onComplete: function () {
                        r.find(".block-bg-cover picture img").attr("src", h.all[h.active].image);
                        TweenMax.to($(".case-study-image .case-background-morph .letter-morph"), 1.5, {
                            morphSVG: $(".case-study-image .case-background-morph .letter-morph").attr("data-original"),
                            ease: Expo.easeOut
                        });
                        TweenMax.to($(".case-study-image .case-background-morph"), 1, {
                            x: "-200%",
                            ease: Expo.easeOut,
                            onComplete: function () {
                                TweenMax.set($(".case-study-image .case-background-morph"), {
                                    clearProps: "all"
                                })
                            }
                        })
                    }
                })
            } else {
                if (h.prev != null) {
                    h.next = h.active;
                    h.active = h.prev;
                    if (0 == e) {
                        h.prev = null;
                        TweenMax.to(l.filter(".prev-slide"), 1, {
                            x: "-120%",
                            ease: Power4.easeOut
                        });
                        l.filter(".prev-slide").attr("data-id", h.prev)
                    } else {
                        h.prev = h.prev - 1;
                        l.filter(".prev-slide").attr("data-id", h.prev);
                        TweenMax.to(l.filter(".prev-slide").find("svg path"), 1, {
                            morphSVG: h.all[h.prev].morph_path,
                            ease: Elastic.easeOut.config(1, .8)
                        });
                        l.filter(".prev-slide").find("svg path").attr("data-current", h.all[h.prev].morph_path);
                        TweenMax.to(l.filter(".prev-slide").find("h3"), .25, {
                            y: "-5px",
                            opacity: 0,
                            ease: Power4.easeOut,
                            onComplete: function () {
                                l.filter(".prev-slide").find("h3").text(h.all[h.prev].case_title);
                                TweenMax.fromTo(l.filter(".prev-slide").find("h3"), .25, {
                                    y: "5px",
                                    opacity: 0
                                }, {
                                    y: "0px",
                                    opacity: 1,
                                    ease: Power4.easeOut
                                })
                            }
                        })
                    }
                    TweenMax.to(l.filter(".next-slide").find("svg path"), 1, {
                        morphSVG: h.all[h.next].morph_path,
                        ease: Elastic.easeOut.config(1, .8)
                    });
                    l.filter(".next-slide").find("svg path").attr("data-current", h.all[h.next].morph_path);
                    l.filter(".next-slide").attr("data-id", h.next);
                    TweenMax.to(l.filter(".next-slide").find("h3"), .25, {
                        y: "-5px",
                        opacity: 0,
                        ease: Power4.easeOut,
                        onComplete: function () {
                            l.filter(".next-slide").find("h3").text(h.all[h.next].case_title);
                            TweenMax.fromTo(l.filter(".next-slide").find("h3"), .25, {
                                y: "5px",
                                opacity: 0
                            }, {
                                y: "0px",
                                opacity: 1,
                                ease: Power4.easeOut
                            })
                        }
                    });
                    TweenMax.to(l.filter(".next-slide"), 1, {
                        x: "0%",
                        ease: Power4.easeOut
                    })
                }
                TweenMax.fromTo($(".case-study-image .case-background-morph"), 1, {
                    rotation: 180,
                    x: "-200%"
                }, {
                    x: "-100%",
                    rotation: 180,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        r.find(".block-bg-cover picture img").attr("src", h.all[h.active].image);
                        TweenMax.to($(".case-study-image .case-background-morph .letter-morph"), 1.5, {
                            morphSVG: $(".case-study-image .case-background-morph .letter-morph").attr("data-original"),
                            ease: Expo.easeOut
                        });
                        TweenMax.to($(".case-study-image .case-background-morph"), 1, {
                            x: "0%",
                            ease: Expo.easeOut,
                            onComplete: function () {
                                TweenMax.set($(".case-study-image .case-background-morph"), {
                                    clearProps: "all"
                                })
                            }
                        })
                    }
                })
            }
            TweenMax.to($(".case-study-image .case-background-morph .letter-morph"), 1.5, {
                morphSVG: $(".case-study-image .case-background-morph .background-rect"),
                ease: Expo.easeOut
            })
        };
        var m = function (e) {
            var t = $(".cases-studies ul li.active"),
                a = d.find(".case-item").eq(e),
                o = $(".fazemos-lightbox .case-images-container .slider"),
                i = _scrollY + t.find(".case-study-image img").offset().top - (_globalViewportH - t.find(".case-study-image img").height()) / 2,
                n = null;
            $(document).on("keydown.casesLightbox", function (e) {
                switch (e.which) {
                    case 27:
                        g();
                    default:
                        break
                }
            });
            $_body.addClass("caseStudies-lightbox-opened");
            f.find(".slider").remove();
            f.find(".case-info-container").remove();
            f.find(".case-images-container").append(a.find(".slider").clone());
            f.append(a.find(".case-info-container").clone());
            f.find(".case-info").append("<div class='gradient'></div>");
            if (!$_html.hasClass("ie") && !$_html.hasClass("edge") && !$_body.hasClass("mobile")) {
                $(".gradient").css("top", _globalViewportH - $(".gradient").outerHeight());
                _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/)
            } else {
                TweenMax.set(".gradient", {
                    autoAlpha: 1
                })
            }
            if (_customScroll == null) {} else {
                _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
                p = Scrollbar.init($(".case-info-container")[0], {
                    speed: .8,
                    syncCallbacks: true
                });
                p.setPosition(0, 0)
            }
            if (p == null) {
                var s = function () {
                    n = _rAF_loop(l)
                };
                $_window[0].addEventListener("scroll", s, {
                    passive: true
                });
                var r = {
                    offset: {
                        y: -1
                    }
                };
                r.offset.y = window.pageYOffset
            } else {
                caseStudies_scroll_listener = function (e) {
                    l(e)
                };
                p.addListener(caseStudies_scroll_listener)
            }

            function l(e) {
                if (!$_html.hasClass("ie") && !$_html.hasClass("edge") && !$_body.hasClass("mobile")) {
                    $(".gradient").css("top", e.offset.y + (_globalViewportH - $(".gradient").outerHeight()))
                }
                if (_scrollY > 10) {
                    TweenMax.to(f.find(".scroll-helper, .mouse-icon"), 1, {
                        opacity: 0,
                        ease: Elastic.easeOut.config(1, .8)
                    })
                } else {
                    TweenMax.to(f.find(".scroll-helper, .mouse-icon"), 1, {
                        opacity: 1,
                        ease: Elastic.easeOut.config(1, .8)
                    })
                }
            }
            o = $(".fazemos-lightbox .case-images-container .slider");
            o.slick({
                dots: true,
                arrows: true
            });
            $(".slick-arrow.slick-next").html("<svg viewBox='0 0 67.69 62.47'><path d='M33.37 2.12c14-.74 28.83 1.33 32 26.33s-17.17 31.84-28.67 32-31.17-.5-34.33-27 14.93-30.48 31-31.33z' stroke-miterlimit='10' stroke-width='5' fill='none' stroke='#2a6ff3'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='5' fill='none' stroke='#2a6ff3' d='M27.01 18.39l13.67 12.22-11.8 13.46'/></svg>");
            $(".slick-arrow.slick-prev").html("<svg viewBox='0 0 67.69 62.47'><path d='M34.33 2.12c-14-.74-28.83 1.33-32 26.33S19.5 60.29 31 60.45s31.17-.5 34.33-27-14.93-30.48-31-31.33z' stroke-miterlimit='10' stroke-width='5' fill='none' stroke='#2a6ff3'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='5' fill='none' stroke='#2a6ff3' d='M40.68 18.39L27.01 30.61l11.81 13.46'/></svg>");
            TweenMax.set(f, {
                x: _globalViewportW,
                autoAlpha: 1
            });
            TweenMax.to(b, 1, {
                y: -b.height() - 50,
                ease: Power4.easeInOut
            });
            TweenMax.to(f, 1.5, {
                x: 0,
                delay: 1,
                ease: Power4.easeOut,
                onComplete: function () {
                    if (_customScroll == null) lockBodySafari()
                }
            });
            TweenMax.to(c, 1.7, {
                x: "-100px",
                delay: 1,
                ease: Expo.easeOut
            });
            TweenMax.to($(".fazemos-lightbox .case-background-morph .letter-morph"), 2, {
                morphSVG: $(".fazemos-lightbox .case-background-morph .background-rect"),
                ease: Expo.easeOut,
                delay: 1
            });
            TweenMax.to($(".fazemos-lightbox .case-background-morph .letter-morph"), 1, {
                morphSVG: "M3000,3000H-1V0h3001V3000z",
                ease: Expo.easeOut,
                delay: 1.5,
                onComplete: function () {
                    TweenMax.fromTo($(".fazemos-lightbox .slider"), 1, {
                        y: 20,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1
                    })
                }
            })
        };
        var g = function () {
            $_body.removeClass("caseStudies-lightbox-opened");
            if (!$_html.hasClass("ie") && !$_html.hasClass("edge")) {
                if (_customScroll) {
                    _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
                } else {
                    unlockBodySafari()
                }
                if (_scrollY > _globalViewportH) {
                    TweenMax.to(b, 1, {
                        y: 0,
                        ease: Power4.easeInOut
                    })
                }
            } else {
                TweenMax.set(".gradient", {
                    autoAlpha: 0
                });
                $_body.css({
                    overflow: "visible",
                    height: "auto"
                });
                $_html.css({
                    overflow: "visible",
                    height: "auto"
                })
            }
            history.pushState({}, {}, window.location.pathname);
            TweenMax.to(f, 1.5, {
                x: _globalViewportW,
                ease: Expo.easeOut
            });
            TweenMax.to(c, 1.7, {
                x: "0px",
                ease: Expo.easeOut,
                onComplete: function () {
                    if (p) {
                        p.destroy()
                    }
                    p = null
                }
            });
            $(".fazemos-lightbox .case-images-container .slider").slick("unslick");
            TweenMax.to($(".case-background-morph .letter-morph"), 2, {
                morphSVG: $(".case-background-morph .letter-morph").attr("data-original"),
                ease: Expo.easeOut
            });
            TweenMax.to($(".fazemos-lightbox .slider"), .2, {
                y: 20,
                autoAlpha: 0
            });
            $(document).off("keydown.casesLightbox")
        };
        var w = function () {
            $(document).off("keydown.casesSlider")
        };
        return {
            init: i,
            kill: w,
            open: m,
            animate: n
        }
    }

    function Me(n) {
        var e = 20;
        var s;
        var r = Date.now();
        var l = 1e3 / e;
        var c;
        var t = window.devicePixelRatio;
        if (t == 2) {
            var f = "intro";
            var a = 1
        } else {
            var f = "intro_low";
            var a = 2
        }
        var d = 0,
            p = 23,
            u = 74,
            h = 700,
            m = 425;
        if (n == "nearshoring") {
            u = 74;
            h = 1400;
            m = 850;
            p = 23
        }
        if (n == "outsourcing") {
            u = 72;
            h = 850;
            m = 850;
            p = 11
        }
        if (n == "software") {
            u = 103;
            h = 1400;
            m = 725;
            p = 20
        }
        var g = new PIXI.Application(h, m, {
                transparent: true
            }),
            w = null,
            v = null,
            b = null;
        var o = function () {
            $_pageHeader.find(".background-wrapper .image-wrapper").append(g.view);
            if (t == 1) {
                $(".page-header canvas").css({
                    transform: "translate3d(-50%,-50%,0) scale(1.2)",
                    top: "50%",
                    left: "50%"
                })
            }
            g.stop();
            var e = new PIXI.loaders.Loader;
            e.add(n + "_0", "/public/imgs/" + n + "/" + f + "/" + n + "_0.png");
            e.load(function () {
                var e = [];
                var t = PIXI.Texture.fromFrame(n + "_0");
                e.push(t);
                v = new PIXI.extras.AnimatedSprite(e);
                v.x = h / 2;
                v.y = m / 2;
                v.anchor.set(.5);
                v.width = h;
                v.height = m;
                TweenMax.set(v.scale, {
                    x: .98,
                    y: .98
                });
                TweenMax.set(v, {
                    alpha: 0
                });
                g.stage.addChild(v);
                TweenMax.to(v.scale, .5, {
                    x: 1,
                    y: 1,
                    ease: Expo.easeOut
                });
                TweenMax.to(v, .5, {
                    alpha: 1
                });
                g.start();
                var a = new PIXI.loaders.Loader;
                for (i = 0; i < u; i++) {
                    a.add(n + "_" + i, "/public/imgs/" + n + "/" + f + "/" + n + "_" + i + ".png")
                }
                a.load(function () {
                    o()
                })
            });

            function o() {
                var e = [],
                    t;
                for (t = 0; t < u; t++) {
                    var a = PIXI.Texture.fromFrame(n + "_" + t);
                    e.push(a)
                }
                w = new PIXI.extras.AnimatedSprite(e);
                w.x = h / 2;
                w.y = m / 2;
                w.anchor.set(.5);
                w.width = h;
                w.height = m;
                TweenMax.set(w.scale, {
                    x: .98,
                    y: .98
                });
                TweenMax.set(w, {
                    alpha: 0
                });
                g.stage.addChild(w);
                TweenMax.to(w.scale, .5, {
                    x: 1,
                    y: 1,
                    ease: Expo.easeOut
                });
                TweenMax.to(w, .5, {
                    alpha: 1,
                    onComplete: function () {
                        g.start();
                        b = _rAF_loop(o);
                        o();
                        g.stage.removeChild(v);
                        v = null
                    }
                });

                function o() {
                    b = _rAF_loop(o);
                    s = Date.now();
                    c = s - r;
                    if (c > l) {
                        r = s - c % l;
                        if (d == u) d = p;
                        w.gotoAndStop(d++)
                    }
                }
            }
        };
        var x = function () {
            if (w) w.destroy();
            if (v) v.destroy();
            if (g) g.destroy();
            cancelAnimationFrame(b);
            b = null
        };
        return {
            init: o,
            kill: x
        }
    }

    function ke() {
        var a = $(".technologies"),
            e = $(".technologies-list");
        if ($_body.hasClass("mobile")) return;
        var t = {
            rootMargin: "0px",
            threshold: [.25]
        };
        var o = function (e, t) {
            e.forEach(function (e) {
                if (e.isIntersecting || e.intersectionRatio > 0) {
                    t.unobserve(e.target);
                    switch (e.target.type) {
                        case "technologiesElement":
                            TweenMax.staggerTo(a.find(".column"), 1, {
                                y: "0px",
                                opacity: 1
                            }, .1);
                            break
                    }
                }
            })
        };
        var i = new IntersectionObserver(o, t);
        a[0].type = "technologiesElement";
        TweenMax.set(a.find(".column"), {
            y: "150px",
            opacity: 0
        });
        i.observe(a[0]);
        e[0].type = "technologiesListElement";
        i.observe(e[0])
    }

    function Ce() {
        var e = JSON.parse(Z.attr("data-activecountries"));
        var t = [];
        for (var a = 0; a < e.length; a++) {
            t.push($("#" + e[a] + "")[0].getAttribute("title"))
        }
        if (!$_body.hasClass("mobile")) {
            for (var o = 0, i = e.length; o < i; o++) {
                var n = tippy("#" + e[o] + "", {
                    arrow: true,
                    content: "" + t[o] + "",
                    trigger: "mouseenter",
                    theme: "map-tooltip"
                })
            }
        } else {
            for (var o = 0, i = e.length; o < i; o++) {
                var n = tippy("#" + e[o] + "", {
                    arrow: true,
                    content: "" + t[o] + "",
                    trigger: "click",
                    theme: "map-tooltip"
                })
            }
            return
        }
        setTimeout(function () {
            for (var e = 0; e < document.querySelectorAll(".point").length; e++) {
                var t = document.querySelectorAll(".point")[e];
                var a = document.createElement("span");
                $(a).addClass("fake-point").addClass(t.getAttribute("title"));
                $(a).css({
                    top: t.getBoundingClientRect().top - U.offset().top,
                    left: t.getBoundingClientRect().left
                });
                U.append(a);
                if (t.getAttribute("title") == "Portugal") {
                    $(".fake-shadow").css({
                        top: t.getBoundingClientRect().top - U.offset().top,
                        left: t.getBoundingClientRect().left
                    })
                }
            }
        }, 1e3)
    }

    function je() {
        var n = $(".list-titles"),
            e = $(".list-titles-wrapper"),
            s = $(".list-titles li"),
            t = $(".lists-items-wrapper"),
            r = $(".lists-items-wrapper .list"),
            l = $(".technologies-list h2.js-title-element");
        l.html("<span class='js-main-text'>" + l.text() + "</span>");
        t.data("real-width", t.width());
        if (_browserObj.isMobile) {
            l.height(l.height())
        }
        if ($_window.width() <= 768) {
            var a = n.height();
            n.height(s.eq(0).height() + 5);
            e.on("click", function () {
                var e = $(this);
                e.toggleClass("js-open");
                if (e.hasClass("js-open")) {
                    TweenMax.to(n, .75, {
                        height: a,
                        ease: Elastic.easeOut.config(1, 1)
                    })
                } else {
                    TweenMax.to(n, .5, {
                        height: s.filter(".active").height() + 5,
                        ease: Power4.easeOut
                    })
                }
            })
        }
        s.on("click", function () {
            var e = $(this),
                t = e.attr("data-target"),
                a = r.filter("." + t),
                o = Math.round(100 * a.find(".column").length / 3);
            if (!w) {
                w = true;
                s.removeClass("active");
                e.addClass("active");
                var i = $("<span class='js-aux-text'>" + e.text() + "</span>");
                TweenMax.set(i, {
                    top: l.height() + 10,
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                });
                l.append(i);
                TweenMax.set(l.find(".js-main-text"), {
                    opacity: 0
                });
                TweenMax.to(l.find(".js-aux-text"), 1, {
                    y: -(l.height() + 10),
                    ease: Expo.easeOut,
                    onComplete: function () {
                        l.find(".js-main-text").remove();
                        l.find(".js-aux-text").attr("style", "").removeClass("js-aux-text").addClass("js-main-text");
                        w = false
                    }
                });
                if ($_window.width() <= 768) {
                    e.prependTo(n)
                }
                TweenMax.set(e.find("p"), {
                    y: "40px",
                    opacity: 0
                });
                TweenMax.to(r.filter(".active"), .1, {
                    y: "40px",
                    opacity: 0,
                    onComplete: function () {
                        TweenMax.fromTo(a, 1, {
                            y: "40px",
                            opacity: 0
                        }, {
                            y: "0px",
                            opacity: 1,
                            ease: Expo.easeOut
                        });
                        r.filter(".active").removeClass("active");
                        a.addClass("active")
                    }
                })
            }
        })
    }

    function Ee(e) {
        if (!_browserObj.isMobile) {
            ie.update(e.offset.y);
            if (_scrollY > _globalViewportH / 2 && !$_pageHeader.hasClass("js-paused")) {
                $_pageHeader.addClass("js-paused");
                S.pause()
            }
            if (_scrollY < _globalViewportH / 2 && $_pageHeader.hasClass("js-paused")) {
                $_pageHeader.removeClass("js-paused");
                S.resume()
            }
        }
        if (!$_html.hasClass("ie") && !$_html.hasClass("edge") && !$_body.hasClass("mobile")) {
            if (_customScroll) {
                h.css("top", e.offset.y)
            }
            if (_customScroll) {
                P.css("top", e.offset.y + _globalViewportH - P.outerHeight() - 125);
                F.css("top", e.offset.y)
            }
        }
        if (_scrollDirection == "down") {
            if (_scrollY > _globalViewportH && _scrollY < _scrollLimit - _globalViewportH && !b.hasClass("js-animated")) {
                b.addClass("js-animated");
                TweenMax.to(b, 1, {
                    y: 0,
                    ease: Power4.easeInOut
                })
            } else if ((_scrollY <= _globalViewportH || _scrollY >= _scrollLimit - _globalViewportH) && b.hasClass("js-animated")) {
                b.removeClass("js-animated");
                TweenMax.to(b, 1, {
                    y: -b.height() - 50,
                    ease: Power4.easeInOut
                })
            }
        } else if (b.hasClass("js-animated")) {
            if (!C) {
                C = true;
                b.removeClass("js-animated");
                TweenMax.to(b, 1, {
                    y: -b.height() - 50,
                    ease: Power4.easeInOut,
                    onComplete: function () {
                        C = false
                    }
                })
            }
        }
        if (!_browserObj.isPhone) {
            a.animateSection(_scrollY);
            if (_scrollY < _globalViewportH) {
                a.hide()
            }
            if (verge.inViewport($_pageFooter, -_globalViewportH / 3) && !$_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.addClass("js-animated-2");
                $_pageFooter.addClass("add-bg-color");
                $_pageFooter.prev("section").addClass("add-bg-color");
                a.hide();
                TweenMax.to(A, 1, {
                    scale: .85,
                    ease: Elastic.easeOut.config(1, .7),
                    autoAlpha: 0,
                    force3D: true
                })
            } else if (!verge.inViewport($_pageFooter, -_globalViewportH / 3) && $_pageFooter.hasClass("js-animated-2")) {
                $_pageFooter.removeClass("js-animated-2");
                $_pageFooter.removeClass("add-bg-color");
                $_pageFooter.prev("section").removeClass("add-bg-color");
                a.show();
                TweenMax.to(A, 1, {
                    scale: 1,
                    ease: Elastic.easeOut.config(1, .7),
                    autoAlpha: 1,
                    force3D: true
                })
            }
            if (verge.inViewport(c, -500) && !c.hasClass("js-animated")) {
                a.show()
            }
            if (verge.inViewport(U, -150) && !U.hasClass("js-animated") && !$_body.hasClass("mobile")) {
                r.find("path").each(function (e) {
                    var t = $(this);
                    TweenMax.from(t, 1, {
                        scale: 0,
                        delay: e * .03,
                        transformOrigin: "center center",
                        ease: Elastic.easeOut.config(1, 1.2)
                    })
                });
                U.addClass("js-animated");
                TweenMax.to(U, 0, {
                    opacity: 1,
                    ease: Expo.easeOut,
                    onComplete: function () {}
                });
                TweenMax.staggerFrom(".fake-point", .1, {
                    opacity: 0,
                    delay: .2,
                    ease: Elastic.easeOut.config(1, .5)
                }, .1, function () {
                    TweenMax.set(".fake-shadow circle", {
                        opacity: 1,
                        ease: Circ.easeOut
                    });
                    TweenMax.to(".fake-shadow", 2.5, {
                        scale: 30.5,
                        opacity: 0,
                        repeat: -1,
                        ease: Circ.easeOut
                    })
                })
            }
        }
        if (!_browserObj.isMobile) {
            if ($_body.hasClass("nearshoring")) {
                if (!de.hasClass("done")) {
                    o.animate(_scrollY)
                }
            }
        }
        if (_browserObj.isPhone) {
            if (b.hasClass("js-animated") && P.find(".project-form").hasClass("js-open-form")) {
                TweenMax.to(b, 1, {
                    y: -b.height() - 50,
                    ease: Elastic.easeOut.config(1, .7)
                })
            }
        }
        if (_browserObj.isMobile) return;
        if (verge.inViewport(s, -600) && !s.hasClass("js-animated")) {
            s.addClass("js-animated");
            t.animate()
        }
        if (!_browserObj.isMobile) {
            if (!_browserObj.isSafari) {
                p.each(function () {
                    var e = $(this);
                    if (verge.inViewport(e) && !e.hasClass("js-animated")) {
                        e.addClass("js-animated");
                        e.data("animation").play()
                    } else if (!verge.inViewport(e) && e.hasClass("js-animated")) {
                        e.removeClass("js-animated");
                        e.data("animation").stop()
                    }
                })
            }
        }
        if (verge.inViewport(n) && !n.hasClass("js-animated")) {
            n.addClass("js-animated");
            TweenMax.staggerTo(n.find("svg path"), 2, {
                "stroke-dashoffset": 0,
                ease: Expo.easeInOut
            }, .15);
            TweenMax.staggerTo(n.find("p"), 2, {
                y: "0px",
                opacity: 1,
                delay: .1,
                ease: Expo.easeInOut
            }, .18)
        }
    }
    return {
        init: we,
        kill: ve
    }
}

function somosPage(e) {
    if ($_body.hasClass("js-no-ajax")) {
        var t = 0,
            a = 1
    } else {
        var t = .5,
            a = 1.5
    }
    var o = 0,
        g = 0,
        i = animateRollingLetters(),
        n = letterMorphParallax($(".place-images svg")),
        s = sequenceDance($(".to-section")),
        r = new z,
        l = new I,
        c = new L,
        w = false,
        v = true,
        f = textFireworks({
            element: $(".page-header h2"),
            animationType: "jellyType",
            delay: t
        }),
        d = textFireworks({
            element: $(".page-header h3"),
            animationType: "smoothEntrance",
            delay: a
        }),
        p = loveAttraction({
            target: $(".affinity-brands .brand-item"),
            factor: .1
        }),
        u = textFireworks({
            element: $(".page-footer h2"),
            animationType: "smoothEntrance",
            delay: 0,
            setupArgs: {
                yValue: 100,
                animationTime: .4
            }
        }),
        h = textFireworks({
            element: $(".page-footer h3"),
            animationType: "smoothEntrance",
            delay: .3,
            setupArgs: {
                yValue: 40,
                animationTime: .8
            }
        }),
        m = headerParallax($(".page-header")),
        b = new GlAnimation({
            title: "about",
            desktopMaxWidth: 1440,
            objsGroup_ScaleDesktop: 1,
            objLetter_ScaleDesktop: .78,
            objGroupX_desktop: 0,
            objGroupY_desktop: 1.2,
            objGroupZ_desktop: 0,
            desktopMaxMaxWidth: 1800,
            objsGroup_ScaleMaxDesktop: 1,
            objLetter_ScaleMaxDesktop: .78,
            objGroupX_MaxDesktop: 0,
            objGroupY_MaxDesktop: 1.2,
            objGroupZ_MaxDesktop: 0,
            objWidthBigDesktop: 1,
            objLetter_ScaleBigDesktop: .78,
            objGroupX_bigDesktop: 0,
            objGroupY_bigDesktop: 1.2,
            objGroupZ_bigDesktop: 0,
            aniTime: 1.2,
            aniTimeLoop: 5.5,
            aniTimeFadeIn: .5,
            mouseInfluence: .65
        });
    var x = $(".gallery"),
        _ = $(".to-section"),
        y = $(".rotate-title h2"),
        T = $(".to-section .columns").find("h3"),
        M = $(".morphing-letter"),
        k = $(".place-images"),
        C = $(".js-height"),
        j = $(".affinity-brands"),
        E = $(".vertical-menu-wrapper"),
        O = $(".image-blocks"),
        S = $(".page-footer"),
        P = [];
    var H = function () {
        if (_customScroll == null) {
            _scrollRef = function () {
                _raf_loop_id = _rAF_loop(q)
            };
            $_window.on("scroll.somosPage", _scrollRef)
        } else {
            _page_scroll_listener = function (e) {
                q(e)
            };
            _customScroll.addListener(_page_scroll_listener)
        }
        y.each(function () {
            var e = $(this);
            e.css("height", e.closest(".container").outerHeight() + "px")
        });
        B();
        elasticButtonsInputs();
        R();
        V();
        n.init();
        l.init();
        setTimeout(function () {
            c.init(function () {
                l.kill();
                l.init()
            })
        }, 1e3);
        if (!_browserObj.isMobile) {
            s.init();
            u.init();
            h.init();
            r.init();
            b.init(function () {
                $.doTimeout(1e3, function () {
                    f.init();
                    d.init(function () {
                        b.playAboutAnimation()
                    })
                })
            });
            p.init();
            i.init();
            if (!$_html.hasClass("safari")) {
                animateMorphLetters()
            }
            TweenMax.to($_body.find(".main-logo"), .5, {
                opacity: 1
            });
            TweenMax.to($_body.find(".language-wrapper"), .5, {
                opacity: 1
            });
            hoverLinksMenu()
        }
        if ($_body.hasClass("mobile") && $_window.width() <= 1024) {
            $(".somos-page .mission h2").html('<span class="firstwrap">A Lifetime</span><span class="secondwrap">Experience.</span>')
        }
    };
    var A = function () {
        if (!$_body.hasClass("mobile")) {
            m.kill();
            i.kill();
            f.kill();
            d.kill();
            p.kill();
            u.kill();
            r.kill();
            h.kill();
            l.kill();
            c.kill();
            if (b) b.kill()
        }
        _scrollRef = null;
        cancelAnimationFrame(_raf_main_id);
        if (_customScroll) {
            _customScroll.removeListener(_page_scroll_listener)
        } else {
            $_window.off("scroll.somosPage");
            $_window[0].cancelAnimationFrame(_raf_loop_id)
        }
    };

    function D(e, t, a, o, i) {
        return (a - t) * (e - o) / (i - o) + t
    }

    function L() {
        var i = $(".affinity-timeline-wrapper"),
            a = $(".timeline-helper"),
            n = $(".timeline-items"),
            s = $(".item"),
            r = $(".point"),
            o = 20,
            l = 0,
            c = [],
            f = $("#svg"),
            d = "",
            p, u = null,
            h = _globalViewportW / 2,
            m = _globalViewportH / 2,
            g = 0;

        function w(e, t, a) {
            var o = document.createElementNS("http://www.w3.org/2000/svg", e),
                i = /([a-z])([A-Z])/g,
                n;
            for (n in a) {
                o.setAttributeNS(null, n.replace(i, "$1-$2").toLowerCase(), a[n])
            }
            $(t).append(o);
            return o
        }
        var e = function (e) {
            !_browserObj.isPhone ? g = 200 : g = 100;
            l = Number($(n).css("marginLeft").replace("px", ""));
            for (var t = 0; t < s.length; t++) {
                $(s[t]).css({
                    height: $(s[0]).outerHeight(),
                    transform: "translateY(" + -o * t + "px)",
                    left: $(s[0]).outerWidth() * t + g * t
                })
            }
            $(n).css("height", $(s[s.length - 1]).outerHeight() + o * s.length - 1);
            $(i).css("width", $(s[0]).outerWidth() * s.length + g * s.length + l);
            $(f).attr("viewBox", "0 0 " + $(i).outerWidth() + " " + $(i).outerHeight() + "");
            if (!_browserObj.isMobile) {
                $(i).mouseenter(function () {
                    TweenMax.to(a, .8, {
                        x: h - (_globalViewportW / 2 - $(a).outerWidth() / 2 + g),
                        y: m - ($(i).outerHeight() - $(a).outerWidth() / 2 + ($(a).outerWidth() + $(a).outerWidth() / 2) - 20),
                        ease: Power4.easeOut
                    });
                    TweenMax.ticker.addEventListener("tick", b)
                });
                $(i).mouseleave(function () {
                    TweenMax.to(a, .8, {
                        x: 0,
                        y: 0,
                        force3D: true,
                        ease: Power4.easeOut
                    });
                    TweenMax.ticker.removeEventListener("tick", b)
                });
                $(i).on("mousemove", function (e) {
                    h = e.clientX;
                    m = e.clientY - $(i).offset().top
                })
            }
            if (!_browserObj.isMobile) {
                $_window.on("resize.timeline", $.debounce(1e3, v))
            }
            setTimeout(function () {
                l = Number($(n).css("marginLeft").replace("px", ""));
                $(i).css("width", $(s[0]).outerWidth() * s.length + g * s.length + l);
                for (var e = 0; e < r.length; e++) {
                    var t = {};
                    t.x = $(r[e]).offset().left + 7;
                    t.y = $(r[e]).offset().top - $(i).offset().top + 7;
                    c.push(t)
                }
                for (var a = 0; a < c.length; a++) {
                    if (a < c.length - 1) {
                        p = ","
                    } else {
                        p = " "
                    }
                    d += " " + c[a].x + " " + c[a].y + "" + p + ""
                }
                $(f).find("polyline").attr("points", d);
                for (var o = 0; o < c.length; o++) {
                    w("circle", f, {
                        cx: c[o].x,
                        cy: c[o].y,
                        r: 7
                    })
                }
            }, 1e3);
            Draggable.create(i, {
                type: "x",
                throwProps: true,
                minDuration: 1.5,
                maxDuration: 2,
                bounds: {
                    minX: 0,
                    minY: 0,
                    maxX: -(i.outerWidth() - (_globalViewportW - l)),
                    maxY: 0
                },
                edgeResistance: 1,
                onPress: function () {
                    if (!_browserObj.isMobile) {
                        TweenMax.to(".timeline-helper .background", .6, {
                            scale: 1.2,
                            ease: Power4.easeOut
                        })
                    }
                },
                onRelease: function () {
                    if (!_browserObj.isMobile) {
                        TweenMax.to(".timeline-helper .background", .6, {
                            scale: 1,
                            ease: Power4.easeOut
                        })
                    }
                }
            });
            e()
        };
        var v = function () {
            l = Number($(n).css("marginLeft").replace("px", ""));
            $(i).css("width", $(s[0]).outerWidth() * s.length + g * s.length + l);
            c = [];
            $(f).find("circle").remove();
            $(f).find("polyline").attr("points", "");
            for (var e = 0; e < r.length; e++) {
                var t = {};
                t.x = $(r[e]).offset().left + 7;
                t.y = $(r[e]).offset().top - $(i).offset().top + 7;
                c.push(t)
            }
            for (var a = 0; a < c.length; a++) {
                if (a < c.length - 1) {
                    p = ","
                } else {
                    p = " "
                }
                d += " " + c[a].x + " " + c[a].y + "" + p + ""
            }
            $(f).find("polyline").attr("points", d);
            for (var o = 0; o < c.length; o++) {
                w("circle", f, {
                    cx: c[o].x,
                    cy: c[o].y,
                    r: 7
                })
            }
            u = Draggable.get($(i));
            u.update()
        };
        var b = function () {
            TweenMax.to(a, .3, {
                x: h - (_globalViewportW / 2 - $(a).outerWidth() / 2 + 50),
                y: m - ($(i).outerHeight() - $(a).outerWidth() / 2 + ($(a).outerWidth() + $(a).outerWidth() / 2) - 20),
                ease: Expo.easeOut
            })
        };
        var t = function () {
            if (!_browserObj.isMobile) {
                TweenMax.ticker.removeEventListener("tick", b);
                $_window.off("resize.timeline");
                if (u != null) u.kill()
            }
        };
        return {
            init: e,
            kill: t
        }
    }

    function I() {
        var e, o, i, t, n, s, r, a = null,
            l, c, f = false,
            d = [];
        var p = function () {
            o = $(".social-articles-wrapper").width();
            i = $(".social-articles-wrapper").offset().left;
            t = $(".social-articles-wrapper").offset().top;
            s = $(".social-articles-wrapper .article").width();
            n = $(".social-articles-wrapper .article").height() + 40;
            r = $(".social-responsability-section .morphing-letter svg").offset().top;
            e = window.innerHeight + $(".social-responsability-section").offset().top;
            l = $(".social-responsability-section").offset().top;
            c = $(".social-responsability-section").height();
            if (window.innerWidth > 1080) {
                $(".social-articles-wrapper .article p").each(function (e, t) {
                    if ($(t).height() !== 0) {
                        d.push($(t).height())
                    }
                    if (e === 3) {
                        d.push(0);
                        d.push($(t).height())
                    }
                    TweenMax.set($(t), {
                        height: 0
                    })
                })
            } else {
                var a = 0;
                $(".social-articles-wrapper .article").each(function (e, t) {
                    if ($(t).outerHeight(true) > a) {
                        a = $(t).outerHeight(true) + 90
                    }
                });
                $(".social-articles-wrapper li").css("height", "" + a + "px")
            }
            if (window.innerWidth > 1080) {
                $(".social-articles-wrapper .article").hover(function () {
                    var e = $(this);
                    TweenMax.to(e.find("p"), 1, {
                        height: d[e.data("id")],
                        ease: Elastic.easeOut.config(1, 1.2)
                    });
                    TweenMax.to(e.find("button"), .4, {
                        y: 200,
                        ease: Elastic.easeOut.config(1, 1.2)
                    })
                }, function () {
                    var e = $(this);
                    TweenMax.to(e.find("p"), 1, {
                        height: 0,
                        ease: Elastic.easeOut.config(1, 1.2)
                    });
                    TweenMax.to(e.find("button"), .4, {
                        y: 0,
                        delay: .2,
                        ease: Elastic.easeOut.config(1, 1.2)
                    })
                });
                VirtualScroll.on(function (e) {
                    if (v) return;
                    if (f) return;
                    if (!w) return;
                    if (Math.floor(g / 5) >= 1 || Math.floor(-g / 5) >= o - i - s + 90) {
                        w = false;
                        if (window.innerWidth > 1080) {
                            _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
                        } else {
                            disableBodyScroll(false)
                        }
                    }
                    if (_browserObj.isEdge || _browserObj.isIE) {
                        g += e.originalEvent.deltaY
                    } else {
                        g += e.deltaY
                    }
                    if (Math.floor(g / 5) < 0 && Math.floor(-g / 5) < o - i - s + 90) {
                        TweenMax.to(".social-articles-wrapper", .6, {
                            x: g / 5,
                            ease: "Power4.easeOut"
                        })
                    }
                });
                u()
            }
        };

        function u() {
            a = _rAF_loop(u);
            if (_scrollY + window.innerHeight > l + c && v || _scrollY + window.innerHeight < l + c && f) {
                cancelAnimationFrame(a);
                v = false;
                if (f) {
                    f = false
                }
                w = true;
                if (window.innerWidth > 1080) {
                    _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
                    _customScroll.setPosition(0, l - 100);
                    _customScroll.stop()
                } else {
                    disableBodyScroll(true)
                }
            }
        }
        var h = function (e, t) {
            if (t == "up" && _scrollY + window.innerHeight < l + c && !w && !v) {
                v = true;
                u();
                g = -1
            }
            if (t == "up" && _scrollY + window.innerHeight > l + c + 100 && !f && !w) {
                f = true;
                u();
                g = (o - i - s + 50) * -1 * 5
            }
            if (_scrollY + window.innerHeight < l && !v) {
                v = true;
                f = false;
                g = 0;
                u()
            }
            if (_scrollY > l + c && !f) {
                f = true;
                g = (o - i - s + 50) * -1 * 5;
                u()
            }
        };
        var m = function () {
            cancelAnimationFrame(a)
        };
        return {
            init: p,
            onScroll: h,
            kill: m
        }
    }

    function V() {
        var e = $(".affinity-brands"),
            t = e.find(".block-wrapper"),
            a = e.find(".plus-button"),
            o = e.find(".overlay"),
            i = 0,
            n = null;
        t.each(function () {
            var e = $(this);
            i = e.outerHeight()
        });
        t.on("mouseenter", function () {
            var e = $(this);
            if (e.hasClass("js-open") || e.hasClass("no-button")) return;
            TweenMax.to(e.find(".plus-button"), .4, {
                scale: 1,
                rotation: 360,
                ease: Expo.easeOut
            })
        }).on("mouseleave", function () {
            var e = $(this);
            if (e.hasClass("js-open") || e.hasClass("no-button")) return;
            TweenMax.to(e.find(".plus-button"), .4, {
                scale: 0,
                rotation: 0,
                ease: Expo.easeOut,
                clearProps: "all"
            })
        });
        t.find(".gradient-block").each(function () {
            var e = $(this),
                t = e.find("h2"),
                a = e.find("p"),
                o = $(".brand-item"),
                i = $(".elastic-btn");
            if (t.outerHeight(true) + a.outerHeight(true) < e.outerHeight(true)) {
                e.closest(o).find(i).addClass("btn-disabled")
            } else {
                e.closest(o).find(i).removeClass("btn-disabled")
            }
        });
        t.on("click", function () {
            var e = $(this),
                t = e.find(".gradient-block"),
                a = e.find(".morph-element");
            if (e.hasClass("no-button")) return;
            e.toggleClass("js-open");
            if (e.hasClass("js-open")) {
                if (_customScroll != null) {
                    _customScroll.scrollTo(0, e.offset().top + _customScroll.offset.y - 60, 700, function () {
                        _customScroll.unregisterEvents(/scroll/, /wheel/, /touchstart/);
                        TweenMax.set($(".affinity-brands").find(".overlay"), {
                            top: _scrollY + "px",
                            onComplete: function () {
                                TweenMax.to($(".affinity-brands").find(".overlay"), .4, {
                                    autoAlpha: 1
                                })
                            }
                        })
                    })
                } else {
                    TweenMax.to($_window, 1, {
                        scrollTo: {
                            y: e.offset().top - 60
                        },
                        ease: Power4.easeOut
                    })
                }
                if (e.data("real-height-block") > _globalViewportH * .8) {
                    n = Scrollbar.init(t[0], {
                        speed: .8
                    });
                    var o = _globalViewportH - 120;
                    TweenMax.to(e, .4, {
                        height: o + "px",
                        zIndex: 2,
                        ease: Expo.easeOut
                    });
                    TweenMax.to(e.find(".gradient-block"), .4, {
                        height: o - 150,
                        ease: Expo.easeOut
                    })
                } else {
                    TweenMax.to(e, .4, {
                        height: e.data("real-height-block"),
                        zIndex: 2,
                        ease: Expo.easeOut
                    });
                    TweenMax.to(e.find(".gradient-block"), .4, {
                        height: e.find(".gradient-block").data("real-height-gradient"),
                        ease: Expo.easeOut
                    })
                }
                TweenMax.to(a, 1, {
                    morphSVG: a.attr("data-click"),
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.set(e.find(".gradient"), {
                    opacity: 0
                })
            } else {
                if (_customScroll != null) _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/);
                if (n != null) {
                    n.destroy();
                    n = null
                }
                TweenMax.to(e, .4, {
                    height: i,
                    ease: Expo.easeOut,
                    clearProps: "zIndex"
                });
                TweenMax.to(a, 1, {
                    morphSVG: a.attr("data-original"),
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to($(".affinity-brands").find(".overlay"), .4, {
                    autoAlpha: 0,
                    clearProps: "all"
                });
                TweenMax.to(e.find(".gradient-block"), .2, {
                    height: 250,
                    overflow: "hidden"
                });
                TweenMax.set(e.find(".gradient"), {
                    opacity: 1
                });
                TweenMax.to(e.find(".plus-button"), .4, {
                    scale: 0,
                    rotation: 0,
                    ease: Expo.easeOut,
                    clearProps: "all"
                })
            }
        });
        o.on("click", function () {
            t.filter(".js-open").find(".plus-button").click()
        })
    }

    function F() {
        var a = $(".clients");
        var e = {
            rootMargin: "0px",
            threshold: [.25]
        };
        if ($_body.hasClass("mobile")) return;
        var t = function (e, t) {
            e.forEach(function (e) {
                if (e.isIntersecting || e.intersectionRatio > 0) {
                    t.unobserve(e.target);
                    switch (e.target.type) {
                        case "clientsElement":
                            TweenMax.staggerTo(a.find(".column"), 1, {
                                opacity: 1,
                                y: 0
                            }, .1);
                            break
                    }
                }
            })
        };
        var o = new IntersectionObserver(t, e);
        a[0].type = "clientsElement";
        TweenMax.set(a.find(".column"), {
            opacity: 0,
            y: 40
        });
        o.observe(a[0])
    }

    function R() {
        x.each(function () {
            var e = $(this),
                t = e.find("li").length;
            e.css("width", $(this).find("li").outerWidth() * t + "px");
            e.find("li").css("width", x.outerWidth() / t + "px")
        })
    }

    function G() {
        var a = $("form");
        a.find("input").on("focus", function () {
            TweenMax.staggerTo(a.find("label"), .5, {
                opacity: 0,
                ease: Expo.easeOut
            })
        });
        a.find("input").on("blur", function () {
            var e = $(this);
            if (e.val() === 0 || e.val() == "") {
                TweenMax.staggerTo(a.find("label"), .5, {
                    opacity: 1,
                    ease: Expo.easeOut
                })
            }
        });
        a.on("submit", function (e) {
            var t = $(this);
            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
            a.find("button")[0].path_line.stop().animate({
                path: a.find("button").data("normal")
            }, 1e3, mina.elastic)
        })
    }

    function B() {
        var e = $(".team-person-container");
        e.each(function () {
            var e = $(this);
            e.find("svg").data("normal", "M23.145,369.802  c19.022,255.764,173.271,293.386,379.272,293.386c206.003,0,302.946-143.638,302.946-320.822 c0-177.187-96.944-320.518-302.946-320.823C179.634,21.21,2.745,95.514,23.145,369.802z");
            e.find("svg").data("active", e.find("svg path").attr("d"));
            e.find("svg path").attr("d", e.find("svg").data("normal"));
            TweenMax.set(e.find("svg"), {
                opacity: 0,
                scale: 0
            })
        });
        e.on("mousemove", function (e) {
            var t = $(this).find("svg");
            var a = e.clientX - t.parent()[0].getBoundingClientRect().left - t.width() / 2;
            var o = e.clientY - t.parent()[0].getBoundingClientRect().top - t.height() / 2;
            TweenMax.to(t, .5, {
                x: a * .1,
                y: o * .1
            });
            TweenMax.to(t, 1, {
                opacity: 1,
                scale: 1,
                ease: Elastic.easeOut.config(1, .75)
            });
            TweenMax.to(t.find("path"), 1, {
                morphSVG: t.data("active"),
                ease: Elastic.easeOut.config(1, .5)
            })
        });
        e.on("mouseleave", function () {
            var e = $(this).find("svg");
            TweenMax.to(e, .5, {
                y: 0,
                x: 0,
                ease: Elastic.easeOut.config(1, .75)
            });
            TweenMax.to(e, .2, {
                opacity: 0,
                scale: 0
            });
            TweenMax.to(e.find("path"), 1, {
                morphSVG: e.data("normal"),
                ease: Elastic.easeOut.config(1, .75)
            })
        })
    }

    function Y() {
        var a = $(".clients"),
            o = $(".clients article"),
            i = $(".blob"),
            n = $(".drag-helper:not(.drag-left)"),
            s = $(".drag-helper.drag-left"),
            t = o.length,
            r = false,
            l = 0,
            c = 0,
            f = 0,
            d = 0,
            p = 0,
            u;
        var e = function () {
            $_window.on("resize.carouselClients", $.debounce(1e3, m));
            TweenMax.set(i, {
                y: (a.outerHeight() - i.outerHeight()) / 2
            });
            TweenMax.set(".clients-wrapper", {
                height: $(".clients-wrapper").find("article").outerHeight()
            });
            o.each(function () {
                var e = $(this),
                    t = e.index();
                if (t == 0) {
                    p = 0;
                    o.eq(p).addClass("active")
                } else {
                    if ($_window.width() < 1650) {
                        p = 350
                    } else if ($_window.width() < 1440) {
                        p = 450
                    } else {
                        p = 500
                    }
                }
                e.css({
                    left: $(this).outerWidth() * t - p * t
                })
            });
            i.hover(function () {
                var e = $(this);
                TweenMax.to(e, 1, {
                    scale: 1,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                })
            }, function () {
                var e = $(this);
                TweenMax.to(e, 1, {
                    scale: .7,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                })
            });
            i.on("mouseleave", function () {
                if (r == false) {
                    return
                }
                var e = $(this);
                u == e.attr("data-direction");
                TweenMax.to(e.find("path"), 1, {
                    morphSVG: e.find("path").attr("data-original"),
                    ease: Expo.easeOut
                });
                TweenMax.to(e, 1, {
                    x: 0,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                });
                if (d < t && u == "right") {
                    d++;
                    TweenMax.to(a.find(".clients-wrapper"), .6, {
                        x: "+=" + (-o.outerWidth() + p),
                        ease: Power2.easeOut
                    });
                    a.find("article.active").removeClass("active");
                    a.find("article").eq(d).addClass("active")
                }
                if (d > 0 && u == "left") {
                    d--;
                    TweenMax.to(a.find(".clients-wrapper"), .6, {
                        x: "-=" + (-o.outerWidth() + p),
                        ease: Power2.easeOut
                    });
                    a.find("article.active").removeClass("active");
                    a.find("article").eq(d).addClass("active");
                    TweenMax.to($(".blob-right"), 1, {
                        x: 0,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    })
                }
                if (d < 1) {
                    TweenMax.to($(".blob-left"), 1, {
                        x: -450,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(s, 1, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(s.find("svg"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(s.find("h4"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    })
                }
                if (d > 0) {
                    TweenMax.to($(".blob-left"), 1, {
                        x: 0,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(s, 1, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                if (d > t - 2) {
                    TweenMax.to($(".blob-right"), 1, {
                        x: 450,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    TweenMax.to(n, 1, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(n.find("svg"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    });
                    TweenMax.to(n.find("h4"), .3, {
                        x: 0,
                        force3D: true,
                        ease: Power2.easeOut
                    })
                } else {
                    TweenMax.to(n, 1, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                l = 0;
                r = false
            });
            i.on("mousedown", function (e) {
                r = true;
                c = e.pageX;
                var t = $(this);
                u = t.attr("data-direction");
                TweenMax.to(t.find("path"), 1, {
                    morphSVG: "M.4 336.83C12 50.47 263 8.05 493 .28S915 146.62 921.65 344.5 747.26 708.75 517.24 716.87C268.47 725.64-12 643.92.4 336.83z",
                    ease: Expo.easeOut
                })
            });
            i.on("mouseup", function () {
                TweenMax.to(n.find("svg"), .3, {
                    x: 0,
                    force3D: true,
                    ease: Power2.easeOut
                });
                TweenMax.to(n.find("h4"), .3, {
                    x: 0,
                    force3D: true,
                    ease: Power2.easeOut
                });
                var e = $(this);
                TweenMax.to(e.find("path"), 1, {
                    morphSVG: e.find("path").attr("data-original"),
                    ease: Expo.easeOut
                });
                TweenMax.to(e, 1, {
                    x: 0,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                });
                l = 0;
                r = false;
                c = 0
            });
            i.on("mousemove", function (e) {
                var t = $(this);
                u = t.attr("data-direction");
                if (r) {
                    if (u == "right") {
                        f = c - e.pageX;
                        if (f > 150) f = 150;
                        if (f < 0) {
                            f = 0
                        }
                        l = f;
                        TweenMax.to(t, .3, {
                            x: -l,
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(n.find("svg"), .3, {
                            x: -(l + l / 2),
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(n.find("h4"), .3, {
                            x: -(l + l / 4),
                            force3D: true,
                            ease: Power2.easeOut
                        })
                    } else {
                        f = e.pageX;
                        if (f > 200) f = 50;
                        if (f < 0) {
                            f = 0
                        }
                        l = f;
                        TweenMax.to(t, .3, {
                            x: l,
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(s.find("svg"), .3, {
                            x: l + l / 2,
                            force3D: true,
                            ease: Power2.easeOut
                        });
                        TweenMax.to(s.find("h4"), .3, {
                            x: l + l / 4,
                            force3D: true,
                            ease: Power2.easeOut
                        })
                    }
                } else {
                    TweenMax.to(t, 1, {
                        x: 0,
                        force3D: true,
                        ease: Elastic.easeOut.config(1, .7)
                    });
                    l = 0
                }
            })
        };
        var h = function () {
            $_window.off("resize.carouselClients")
        };

        function m() {
            o.each(function () {
                var e = $(this),
                    t = e.index();
                if (t == 0) {
                    p = 0;
                    o.eq(p).addClass("active")
                } else {
                    if ($_window.width() < 1650) {
                        p = 350
                    } else if ($_window.width() < 1440) {
                        p = 450
                    } else {
                        p = 500
                    }
                }
                e.css({
                    left: $(this).outerWidth() * t - p * t
                });
                TweenMax.to(a.find(".clients-wrapper"), .6, {
                    x: 0,
                    ease: Power2.easeOut
                });
                o.removeClass("active");
                o.eq(0).addClass("active");
                TweenMax.to($(".blob-left"), 1, {
                    x: -450,
                    y: (a.outerHeight() - i.outerHeight()) / 2,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                });
                TweenMax.to($(".blob-right"), 1, {
                    x: 0,
                    y: (a.outerHeight() - i.outerHeight()) / 2,
                    force3D: true,
                    ease: Elastic.easeOut.config(1, .7)
                });
                d = 0
            })
        }
        e();
        return {
            init: e,
            kill: h
        }
    }

    function z() {
        this.init = function () {
            C.each(function (e) {
                var t = $(this),
                    a = {};
                a.element = t;
                a.offset = t.offset().top;
                a.height = t.outerHeight(true);
                a.lineWidth = E.find("li").eq(C.length - 1 - e).find(".container-height").outerWidth();
                P.push(a)
            });
            E.find("li").click(function () {
                var e = $(this),
                    t = e.index();
                e.prevAll("li").addClass("active");
                e.addClass("active");
                if (_customScroll) {
                    _customScroll.scrollTo(0, P[P.length - 1 - t].offset, 2e3, function () {
                        _customScroll.registerEvents(/scroll/, /wheel/, /touchstart/)
                    })
                } else {
                    $("html, body").animate({
                        scrollTop: P[P.length - 1 - t].offset
                    }, 1e3)
                }
            });
            $_window.on("resize.verticalMenu", $.debounce(500, e))
        };
        this.animateSection = function (e) {
            for (var t = 0; t < P.length; t++) {
                if (e > P[t].offset && e < P[t].offset + P[t].height) {
                    var a = normalizedValue(e - P[t].offset, P[t].height, 0);
                    E.find("li").eq(P.length - 1 - t).addClass("active");
                    TweenMax.set(E.find("li").eq(P.length - 1 - t).find(".container-height"), {
                        scaleX: a,
                        force3D: true
                    })
                }
                if (e < P[t].offset) {
                    E.find("li").eq(P.length - 1 - t).removeClass("active");
                    TweenMax.set(E.find("li").eq(P.length - 1 - t).find(".container-height"), {
                        scaleX: 0,
                        force3D: true
                    })
                }
            }
        };
        this.show = function () {
            TweenMax.staggerTo(E.find("li"), 1, {
                y: 0,
                ease: Elastic.easeOut.config(1, .8)
            }, .1);
            E.addClass("enable")
        };
        this.hide = function () {
            TweenMax.staggerTo(E.find("li"), 1, {
                y: -200,
                ease: Elastic.easeOut.config(1, .8)
            }, .1);
            E.removeClass("enable")
        };
        this.kill = function () {
            $_window.off("resize.verticalMenu")
        };

        function e() {
            P = [];
            C.each(function (e) {
                var t = $(this),
                    a = {};
                a.element = t;
                if (e == 3) {
                    a.offset = t.offset().top - parseInt(j.css("paddingTop")) - parseInt(j.css("paddingBottom"))
                } else {
                    a.offset = t.offset().top
                }
                a.height = t.outerHeight(true);
                a.lineWidth = E.find("li").eq(C.length - 1 - e).find(".container-height").outerWidth();
                P.push(a)
            })
        }
    }

    function W() {
        var e = $(".clients"),
            a = $(".clients article"),
            t = $(".blob"),
            o = $(".drag-helper:not(.drag-left)"),
            i = $(".drag-helper.drag-left"),
            n = a.length,
            s = false,
            r = 0,
            l = 0,
            c = 0,
            f = 0,
            d = 0,
            p;
        var u = function () {
            TweenMax.set(e, {
                height: $(".clients-wrapper").find("article").outerHeight()
            });
            TweenMax.set(".clients-wrapper", {
                height: $(".clients-wrapper").find("article").outerHeight()
            });
            a.each(function () {
                var e = $(this),
                    t = e.index();
                if (t == 0) {
                    d = 0;
                    a.eq(d).addClass("active")
                } else {
                    if ($_window.width() < 1650) {
                        d = 350
                    } else {
                        d = 0
                    }
                    if ($_window.width() < 1440) {
                        d = 450
                    }
                    if ($_window.width() <= 1024) {
                        d = 0
                    }
                }
                e.css({
                    left: $(this).outerWidth() * t - d * t
                })
            });
            a.on("swiperight", function () {
                if (f > 0) {
                    f--;
                    TweenMax.to(e.find(".clients-wrapper"), .6, {
                        x: "-=" + (-a.outerWidth() + d),
                        ease: Power2.easeOut
                    });
                    e.find("article.active").removeClass("active");
                    e.find("article").eq(f).addClass("active");
                    TweenMax.to(o, .6, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                if (f == 0) {
                    TweenMax.to(i, .6, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            });
            a.on("swipeleft", function () {
                if (f < n - 1) {
                    f++;
                    TweenMax.to(e.find(".clients-wrapper"), .6, {
                        x: "+=" + (-a.outerWidth() + d),
                        ease: Power2.easeOut
                    });
                    e.find("article.active").removeClass("active");
                    e.find("article").eq(f).addClass("active");
                    TweenMax.to(i, .6, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
                if (f == n - 1) {
                    TweenMax.to(o, .6, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            })
        };
        u();
        return {
            init: u
        }
    }
    if (!$_body.hasClass("mobile")) Y();
    else W();

    function q(e) {
        if (window.innerWidth > 1080) {
            l.onScroll(e.offset.y, e.direction.y)
        }
        if (verge.inViewport(_, -100) && !_.hasClass("js-animated")) {
            _.addClass("js-animated");
            s.animate()
        }
        if (verge.inViewport(k, -_globalViewportH)) {
            n.animateIn()
        }
        if (!$_html.hasClass("ie") && !$_html.hasClass("edge") && !$_body.hasClass("mobile")) {
            if (_customScroll) {
                E.css("top", e.offset.y)
            }
        }
        if (!_browserObj.isMobile) {
            if (_scrollY > 10) {
                if (!$_pageHeader.hasClass("js-animated")) {
                    $_pageHeader.addClass("js-animated");
                    b.pause()
                }
            } else {
                if ($_pageHeader.hasClass("js-animated")) {
                    $_pageHeader.removeClass("js-animated");
                    b.resume()
                }
            }
        }
        if (!_browserObj.isMobile) {
            if (!_browserObj.isSafari) {
                M.each(function () {
                    var e = $(this);
                    if (verge.inViewport(e) && !e.hasClass("js-animated")) {
                        e.addClass("js-animated");
                        e.data("animation").play()
                    } else if (!verge.inViewport(e) && e.hasClass("js-animated")) {
                        e.removeClass("js-animated");
                        e.data("animation").stop()
                    }
                })
            }
        }
        if (!_browserObj.isPhone) {
            r.animateSection(_scrollY);
            if (_scrollY < _globalViewportH) {
                r.hide()
            }
            if (verge.inViewport(S, -_globalViewportH / 3) && !S.hasClass("js-animated-2")) {
                S.addClass("js-animated-2");
                S.addClass("add-bg-color");
                S.prev("section").addClass("add-bg-color");
                r.hide();
                $.doTimeout(250, function () {
                    u.animate();
                    h.animate();
                    $.doTimeout(250, function () {
                        if (!$_body.hasClass("mobile")) {
                            i.animate()
                        }
                    })
                })
            } else if (!verge.inViewport(S, -_globalViewportH / 3) && S.hasClass("js-animated-2")) {
                S.removeClass("js-animated-2");
                S.removeClass("add-bg-color");
                S.prev("section").removeClass("add-bg-color");
                r.show();
                i.pause()
            }
            if (verge.inViewport(O, -500) && !O.hasClass("js-animated")) {
                r.show()
            }
        }
    }
    return {
        init: H,
        kill: A
    }
}