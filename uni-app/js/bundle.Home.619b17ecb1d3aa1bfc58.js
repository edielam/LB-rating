"use strict";
(self.webpackChunkWebsite = self.webpackChunkWebsite || []).push([
    [5268], {
        10482: function(e, a, s) {
            var t = s(28216),
                o = s(85893);
            a.Z = function(e) {
                const a = (0, t.v9)((e => e.app.vertical));
                return (0, o.jsx)("div", {
                    className: "rankings-badge",
                    "data-size": e.size,
                    "data-theme": e.theme,
                    "data-vertical": e.vertical || a,
                    "data-testid": "rankings-badge"
                })
            }
        },
        98648: function(e, a, s) {
            s.r(a), s.d(a, {
                default: function() {
                    return J
                }
            });
            var t = s(58118),
                o = s.n(t),
                i = s(67294),
                r = s(45697),
                n = s.n(r),
                l = s(28216),
                c = s(22655),
                h = s(36686),
                m = s(52218),
                d = s(44416),
                u = s(56155),
                p = s(9044),
                g = s(71858),
                _ = s(87060),
                b = s(60186),
                y = s(59113),
                j = s(31627);
            var x = {
                    hero: {
                        kicker: "Find the School",
                        title: "That Fits You Best",
                        body: "Finding the right school shouldn’t be hard. From K‑12 to college to grad school, we make it easy to discover and connect with the best ones for you.",
                        ctasHeader: "Start Your Search",
                        k12CTA: "K-12 Schools",
                        collegeCTA: "Colleges",
                        gradCTA: "Grad Schools"
                    },
                    about: {
                        kicker: "Find Your Niche",
                        title: "Your search is unique.",
                        subtitle: "Just like you.",
                        description: "We give you all of the data, reviews, and insights in one place to make your search as easy as possible.",
                        reasons: [{
                            id: "reason-0",
                            title: "No Heavy Lifting",
                            description: "We analyze the data so you don't have to.",
                            source: (0, j.ER)("static/home/why-icon-1.svg")
                        }, {
                            id: "reason-1",
                            title: "The Good, The Bad, & The Honest",
                            description: "Our user reviews let you hear directly from families and students to give you an honest and holistic view.",
                            source: (0, j.ER)("static/home/why-icon-2.svg")
                        }, {
                            id: "reason-2",
                            title: "Like A Glove",
                            description: "We personalize your search based on what's most important to you.",
                            source: (0, j.ER)("static/home/why-icon-3.svg")
                        }]
                    },
                    testimonials: {
                        kicker: "Real Niche Stories",
                        title: "Niche has helped millions of students and families find their fit.",
                        abbyQuote: "During my college search, I was having a difficult time narrowing down what I wanted in a school, so I used Niche to help. I especially liked looking at the rankings for different aspects of the college experience, like the campus, academics, and much more!",
                        abbyQuoter: "Abby D.",
                        daynaQuote: "I am so grateful for Niche and their resources. Schooling children at home has truly had its challenges. But having resources has made it so much easier. Finding the right programs for my little ones has been invaluable.",
                        daynaQuoter: "Dayna M.",
                        clayQuote: "When I was applying to college, I had no idea what I was looking for. Niche helped me explore different schools and see breakdowns on many aspects of their programs! Thanks to Niche, I found a school that was a perfect fit!",
                        clayQuoter: "Clay N."
                    },
                    features: {
                        kicker: "Stay On Track",
                        title: "Tools to organize your school search.",
                        description: "We'll help you build your list, track your progress and get new recommendations as your search narrows.",
                        cta: "Start Exploring",
                        animationAriaLabel: "Animation, Search and manage schools; Click to pause"
                    },
                    compare: {
                        kicker: "Choose Your School",
                        title: "Everything you need to make your decision.",
                        description: "With the information you care about on every school in America, we make it easy for you to compare schools and colleges to make your decision.",
                        links: [{
                            id: "compare-link-1",
                            title: "Compare K-12 Schools",
                            url: (0, j.KV)("k12", "compare"),
                            eventLabel: "HP_Compare_K12"
                        }, {
                            id: "compare-link-2",
                            title: "Compare Colleges",
                            url: (0, j.KV)("colleges", "compare"),
                            eventLabel: "HP_Compare_College"
                        }],
                        animationAriaLabel: "Animation, Compare schools easily; Click to pause"
                    },
                    rankings: {
                        title: "Browse schools & colleges by “best of” lists.",
                        description: "We combine the reviews and the data to put together these comprehensive lists to get you started.",
                        badges: [{
                            id: "best-badge-1",
                            title: "View Best Colleges",
                            url: (0, j.KV)("colleges", "rankings"),
                            eventLabel: "HP_Rankings_College"
                        }, {
                            id: "best-badge-2",
                            title: "View Best K-12 Schools",
                            url: (0, j.KV)("k12", "rankings"),
                            eventLabel: "HP_Rankings_K12"
                        }, {
                            id: "best-badge-3",
                            title: "View Best Districts",
                            url: (0, j.KV)("k12", "search/best-school-districts"),
                            eventLabel: "HP_Rankings_Districts"
                        }]
                    },
                    partners: {
                        kicker: "Partner With Niche",
                        title: "For schools and colleges",
                        description: "Are you a college or K-12 school representative? Learn more about how you can partner with Niche to connect with students and families throughout the school search process.",
                        claimCta: "Claim Your School",
                        learnMoreCta: "Learn More",
                        logosTitle: "Over 1,700 schools partner with Niche",
                        partners: [{
                            id: "partner-1",
                            source: (0, j.ER)("static/home/logo-phillips-andover.png"),
                            alt: "Phillips Academy Andover logo"
                        }, {
                            id: "partner-2",
                            source: (0, j.ER)("static/home/logo-oregon.png"),
                            alt: "University of Oregon logo"
                        }, {
                            id: "partner-3",
                            source: (0, j.ER)("static/home/logo-wash-jeff.png"),
                            alt: "Washington and Jefferson College logo"
                        }, {
                            id: "partner-4",
                            source: (0, j.ER)("static/home/logo-marquette.png"),
                            alt: "Marquette University logo"
                        }]
                    },
                    whereToStart: {
                        header: "Not sure where to start?",
                        body: "Tell us what  matters most to you and we'll create a custom list of schools tailored to fit your needs.",
                        collegeQuizCta: "Take our College Quiz",
                        k12Cta: " Find K-12 Schools Near You"
                    }
                },
                w = s(67676),
                v = s(94740),
                k = s(97948),
                N = s(85893);
            var f = () => {
                    const e = e => {
                        const {
                            url: a,
                            path: s,
                            vertical: t,
                            hasLocationSuffix: o
                        } = e;
                        return s ? (0, v.Dx)({
                            path: s,
                            vertical: t,
                            hasLocationSuffix: o,
                            locationSuffixes: !0
                        }) : a
                    };
                    return (0, N.jsxs)("div", {
                        className: "home-hero__cta-wrap",
                        children: [(0, N.jsx)("div", {
                            className: "type--weight-600 home-hero__cta-title",
                            children: x.hero.ctasHeader
                        }), (0, N.jsx)("ul", {
                            className: "home-hero__ctas",
                            children: b.tJ.filter((e => "places-to-live" !== e.vertical)).map((a => {
                                const {
                                    linkLabel: s,
                                    eventLabel: t
                                } = (e => {
                                    let a, s;
                                    switch (e.vertical) {
                                        case k.we.Colleges.Subdomain:
                                            a = x.hero.collegeCTA, s = "HP_Hero_College";
                                            break;
                                        case k.we.K12.Subdomain:
                                            a = x.hero.k12CTA, s = "HP_Hero_K12";
                                            break;
                                        case k.we.GraduateSchools.Subdomain:
                                            a = x.hero.gradCTA, s = "HP_Hero_Grad";
                                            break;
                                        default:
                                            a = "", s = ""
                                    }
                                    return {
                                        linkLabel: a,
                                        eventLabel: s
                                    }
                                })(a);
                                return (0, N.jsx)("li", {
                                    className: "home-hero__cta",
                                    children: (0, N.jsx)("a", {
                                        href: e(a),
                                        className: "button home-button--green home-hero__cta-link",
                                        onClick: () => (0, w.YW)(w.KQ.Click, {
                                            label: t
                                        }),
                                        tabIndex: 0,
                                        children: s
                                    })
                                }, a.vertical)
                            }))
                        })]
                    })
                },
                S = s(40557);
            var C = () => (0, N.jsxs)("section", {
                    className: "home-hero",
                    children: [(0, N.jsxs)("picture", {
                        className: "home-hero__photo home-hero__photo-v2",
                        children: [(0, N.jsx)("source", {
                            srcSet: (0, j.ER)("static/home/hero-lg.webp"),
                            type: "image/webp",
                            media: "(min-width: 768px)"
                        }), (0, N.jsx)("source", {
                            srcSet: (0, j.ER)("static/home/hero.webp"),
                            type: "image/webp"
                        }), (0, N.jsx)("source", {
                            srcSet: (0, j.ER)("static/home/hero-lg.jpg"),
                            type: "image/jpeg",
                            media: "(min-width: 768px)"
                        }), (0, N.jsx)("source", {
                            srcSet: (0, j.ER)("static/home/hero.jpg"),
                            type: "image/jpeg"
                        }), (0, N.jsx)("img", {
                            src: (0, j.ER)("static/home/hero.jpg"),
                            alt: "Students laughing around tablet"
                        }), (0, N.jsx)("div", {
                            className: "noise-filter"
                        })]
                    }), (0, N.jsxs)("div", {
                        className: "home-hero__content-container",
                        children: [(0, N.jsxs)("h1", {
                            className: "home-hero__header",
                            children: [(0, N.jsx)("div", {
                                className: "type--weight-600 home-hero__header__kicker",
                                children: x.hero.kicker
                            }), (0, N.jsx)("div", {
                                className: "type--weight-700 home-hero__header__title",
                                children: x.hero.title
                            })]
                        }), (0, N.jsx)(S.Z, {}), (0, N.jsx)("div", {
                            className: "type--weight-400 home-body home-body--hero",
                            children: x.hero.body
                        }), (0, N.jsx)(f, {})]
                    })]
                }),
                R = s(72217);
            var E = e => {
                let {
                    classModifier: a
                } = e;
                return (0, N.jsx)("div", {
                    className: "home-wavy-edge " + (a ? `home-wavy-edge${a}` : ""),
                    children: (0, N.jsx)("div", {
                        className: "home-wavy-edge__inner",
                        children: (0, N.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 2000 45",
                            children: (0, N.jsx)("path", {
                                d: "M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z",
                                transform: "translate(0 -5)"
                            })
                        })
                    })
                })
            };
            var A = e => {
                let {
                    triggerRegOrNavigate: a
                } = e;
                return (0, N.jsxs)("section", {
                    className: "home-direct-admissions",
                    children: [(0, N.jsx)(E, {}), (0, N.jsxs)("div", {
                        className: "home-direct-admissions__section-wrapper",
                        children: [(0, N.jsxs)("div", {
                            className: "home-direct-admissions__about-section home-direct-admissions__about-section--details",
                            children: [(0, N.jsxs)("picture", {
                                className: "direct-admissions-logo",
                                children: [(0, N.jsx)("source", {
                                    srcSet: (0, j.ER)("static/direct-admissions-logo.webp"),
                                    type: "image/webp"
                                }), (0, N.jsx)("source", {
                                    srcSet: (0, j.ER)("static/direct-admissions-logo.png"),
                                    type: "image/png"
                                }), (0, N.jsx)("img", {
                                    loading: "lazy",
                                    src: (0, j.ER)("static/direct-admissions-logo.png"),
                                    alt: "Niche Direct Admissions logo"
                                })]
                            }), (0, N.jsxs)("picture", {
                                className: "home-direct-admissions__photo--mobile",
                                children: [(0, N.jsx)("source", {
                                    srcSet: (0, j.ER)("static/home/home-da.webp"),
                                    type: "image/webp"
                                }), (0, N.jsx)("source", {
                                    srcSet: (0, j.ER)("static/home/home-da.png"),
                                    type: "image/png"
                                }), (0, N.jsx)("img", {
                                    loading: "lazy",
                                    src: (0, j.ER)("static/home/home-da.png"),
                                    alt: "Students laughing around tablet"
                                })]
                            }), (0, N.jsx)("p", {
                                className: "home-direct-admissions__header type--weight-700 home-header home-header__title",
                                children: "Get accepted without an application."
                            }), (0, N.jsx)("p", {
                                className: "home-direct-admissions__body type--weight-400 home-body",
                                children: "No application. No waiting."
                            }), (0, N.jsx)("p", {
                                className: "type--weight-400 home-body",
                                children: "With Direct Admissions, colleges can accept you based on the information in your Niche Profile."
                            }), (0, N.jsxs)("div", {
                                className: "home-direct-admissions__button-wrapper",
                                children: [(0, N.jsx)(R.B, {
                                    className: "home-direct-admissions__signup-button",
                                    onClick: () => {
                                        (0, w.YW)({
                                            category: "Revenue",
                                            id: "Reg",
                                            label: "direct_admissions_create_profile"
                                        }), a()
                                    },
                                    size: "large",
                                    children: "Create a Niche Profile"
                                }), (0, N.jsx)(R.B, {
                                    href: "/about/direct-admissions",
                                    onClick: () => {
                                        (0, w.YW)({
                                            category: "Click",
                                            id: "Engagement",
                                            label: "direct_admissions_learn_more"
                                        })
                                    },
                                    size: "large",
                                    variant: "outlined",
                                    children: "Learn more"
                                })]
                            })]
                        }), (0, N.jsx)("div", {
                            className: "home-direct-admissions__about-section home-direct-admissions__about-section--image",
                            children: (0, N.jsxs)("picture", {
                                className: "home-direct-admissions__photo--desktop",
                                children: [(0, N.jsx)("source", {
                                    srcSet: (0, j.ER)("static/home/home-da.webp"),
                                    type: "image/webp"
                                }), (0, N.jsx)("source", {
                                    srcSet: (0, j.ER)("static/home/home-da.png"),
                                    type: "image/png"
                                }), (0, N.jsx)("img", {
                                    src: (0, j.ER)("static/home/home-da.png"),
                                    alt: "Students laughing around tablet"
                                })]
                            })
                        })]
                    })]
                })
            };
            var I = () => (0, N.jsxs)("section", {
                    className: "home-why-niche",
                    children: [(0, N.jsx)("h2", {
                        className: "home-header home-header--why",
                        children: (0, N.jsx)("div", {
                            className: "type--weight-600 home-header__kicker",
                            children: x.about.kicker
                        })
                    }), (0, N.jsxs)("p", {
                        className: "type--weight-700 home-header home-header--why home-header__title",
                        children: [x.about.title, (0, N.jsx)("br", {}), x.about.subtitle]
                    }), (0, N.jsx)(S.Z, {}), (0, N.jsx)("div", {
                        className: "type--weight-400 home-body home-body--why",
                        children: x.about.description
                    }), (0, N.jsx)("ul", {
                        className: "home-why-reasons",
                        children: x.about.reasons.map((e => (0, N.jsxs)("li", {
                            className: "home-why-reason",
                            children: [(0, N.jsx)("figure", {
                                className: "home-why-reason__illustration",
                                children: (0, N.jsx)("img", {
                                    loading: "lazy",
                                    src: e.source,
                                    alt: ""
                                })
                            }), (0, N.jsx)("h3", {
                                className: "type--weight-800 home-why-reason__title",
                                children: e.title
                            }), (0, N.jsx)("div", {
                                className: "type--weight-400 home-body home-why-reason__body",
                                children: e.description
                            })]
                        }, e.id)))
                    })]
                }),
                L = s(40684),
                K = s(91352);
            const M = L.ZP.lib((() => s.e(411).then(s.t.bind(s, 98234, 23))));
            var T = () => {
                const [e, a] = (0, i.useState)(!1), [s, t] = (0, i.useState)(!1), [o, r] = (0, i.useState)(null), n = e => {
                    e.keyCode === K.XR.Enter && (o && (s ? o.play() : o.pause()), t(!s))
                };
                return (0, i.useEffect)((() => {
                    const e = document.getElementById("compareAnimation"),
                        s = new IntersectionObserver(((e, s) => {
                            let [t] = e;
                            t.intersectionRatio > .8 ? (a(!0), o && s.unobserve(t.target)) : a(!1)
                        }), {
                            threshold: .8
                        });
                    return e && s.observe(e), () => s.disconnect()
                }), []), (0, i.useEffect)((() => {
                    e && o && (o.play(), t(!1))
                }), [e, o]), (0, N.jsxs)("section", {
                    className: "home-compare",
                    children: [(0, N.jsx)("div", {
                        className: "home-compare__stamp",
                        children: (0, N.jsx)("img", {
                            alt: "",
                            loading: "lazy",
                            src: (0, j.ER)("static/home/stamp-everything.svg")
                        })
                    }), (0, N.jsxs)("div", {
                        className: "home-compare__copy-container",
                        children: [(0, N.jsx)("h2", {
                            className: "home-header home-header--compare",
                            children: (0, N.jsx)("div", {
                                className: "type--weight-600 home-header__kicker",
                                children: x.compare.kicker
                            })
                        }), (0, N.jsx)("p", {
                            className: "type--weight-700 home-header home-header--compare home-header__title",
                            children: x.compare.title
                        }), (0, N.jsx)(S.Z, {
                            classModifier: "--compare"
                        }), (0, N.jsx)("div", {
                            className: "type--weight-400 home-body home-body--compare",
                            children: x.compare.description
                        }), (0, N.jsx)("ul", {
                            className: "home-compare__links",
                            children: x.compare.links.map((e => (0, N.jsx)("li", {
                                className: "home-compare__link",
                                children: (0, N.jsx)("a", {
                                    href: e.url,
                                    onClick: () => (0, w.YW)(w.KQ.Click, {
                                        label: e.eventLabel
                                    }),
                                    onFocus: () => a(!0),
                                    tabIndex: 0,
                                    children: e.title
                                })
                            }, e.id)))
                        })]
                    }), (0, N.jsx)("div", {
                        "aria-hidden": !0,
                        className: "home-compare__animation-wrap",
                        onKeyDown: e => n(e),
                        children: (0, N.jsx)("div", {
                            "aria-label": x.compare.animationAriaLabel,
                            className: "home-compare__animation",
                            id: "compareAnimation",
                            onClick: () => {
                                o && (s ? o.play() : o.pause()), t(!s)
                            },
                            onKeyDown: e => n(e),
                            role: "button",
                            tabIndex: 0
                        })
                    }), (0, N.jsx)(M, {
                        ref: a => {
                            if (null !== a) {
                                const s = a.loadAnimation({
                                    container: document.querySelector("#compareAnimation"),
                                    loop: !1,
                                    autoplay: !1,
                                    renderer: "svg",
                                    path: (0, j.ER)("static/home/animation-compare.json"),
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                });
                                s.addEventListener("DOMLoaded", (() => {
                                    e && (s.play(), t(!1))
                                })), r(s)
                            }
                        }
                    })]
                })
            };
            var q = e => {
                let {
                    classModifier: a
                } = e;
                return (0, N.jsx)("div", {
                    className: "home-background-squiggle " + (a ? `home-background-squiggle${a}` : ""),
                    children: (0, N.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1512 3578.12",
                        children: (0, N.jsx)("path", {
                            d: "M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"
                        })
                    })
                })
            };
            const z = L.ZP.lib((() => s.e(411).then(s.t.bind(s, 98234, 23))));
            var Q = () => {
                const [e, a] = (0, i.useState)(!1), [s, t] = (0, i.useState)(!1), [o, r] = (0, i.useState)(null);
                return (0, i.useEffect)((() => {
                    const e = document.getElementById("featuresAnimation"),
                        s = new IntersectionObserver(((e, s) => {
                            let [t] = e;
                            t.intersectionRatio > .8 ? (a(!0), o && s.unobserve(t.target)) : a(!1)
                        }), {
                            threshold: .8
                        });
                    return e && s.observe(e), () => s.disconnect()
                }), []), (0, i.useEffect)((() => {
                    e && o && (o.play(), t(!1))
                }), [e, o]), (0, N.jsxs)("section", {
                    className: "home-features",
                    children: [(0, N.jsx)(q, {
                        classModifier: "--green"
                    }), (0, N.jsxs)("div", {
                        className: "home-features__copy-container",
                        children: [(0, N.jsx)("h2", {
                            className: "home-header home-header--features",
                            children: (0, N.jsx)("div", {
                                className: "type--weight-600 home-header__kicker",
                                children: x.features.kicker
                            })
                        }), (0, N.jsx)("p", {
                            className: "type--weight-700 home-header home-header--features home-header__title",
                            children: x.features.title
                        }), (0, N.jsx)(S.Z, {
                            classModifier: "--features"
                        }), (0, N.jsx)("div", {
                            className: "type--weight-400 home-body home-body--features",
                            children: x.features.description
                        }), (0, N.jsx)("div", {
                            className: "home-features__cta-wrap",
                            children: (0, N.jsx)("a", {
                                className: "type--weight-600 home-features__cta",
                                href: (0, j.KV)("colleges", "search/best-colleges"),
                                onClick: () => (0, w.YW)(w.KQ.Click, {
                                    label: "HP_Tools_CTA"
                                }),
                                onFocus: () => a(!0),
                                tabIndex: 0,
                                children: x.features.cta
                            })
                        })]
                    }), (0, N.jsx)("div", {
                        "aria-hidden": !0,
                        className: "home-features__animation-wrap",
                        children: (0, N.jsx)("div", {
                            "aria-label": x.features.animationAriaLabel,
                            className: "home-features__animation",
                            id: "featuresAnimation",
                            onClick: () => {
                                o && (s ? o.play() : o.pause()), t(!s)
                            },
                            onKeyDown: e => (e => {
                                e.keyCode === K.XR.Enter && (o && (s ? o.play() : o.pause()), t(!s))
                            })(e),
                            role: "button",
                            tabIndex: 0
                        })
                    }), (0, N.jsx)(z, {
                        ref: a => {
                            if (null !== a) {
                                const s = a.loadAnimation({
                                    container: document.querySelector("#featuresAnimation"),
                                    loop: !1,
                                    autoplay: !1,
                                    renderer: "svg",
                                    path: (0, j.ER)("static/home/animation-features.json"),
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                });
                                s.addEventListener("DOMLoaded", (() => {
                                    e && (s.play(), t(!1))
                                })), r(s)
                            }
                        }
                    })]
                })
            };
            var P = () => (0, N.jsxs)("section", {
                    className: "home-started",
                    children: [(0, N.jsx)(E, {
                        classModifier: "--start"
                    }), (0, N.jsx)("div", {
                        className: "home-start__illustration",
                        children: (0, N.jsxs)("picture", {
                            children: [(0, N.jsx)("source", {
                                srcSet: (0, j.ER)("static/home/start-student-with-dog.webp"),
                                type: "image/webp"
                            }), (0, N.jsx)("source", {
                                srcSet: (0, j.ER)("static/home/start-student-with-dog.png"),
                                type: "image/png"
                            }), (0, N.jsx)("img", {
                                loading: "lazy",
                                src: (0, j.ER)("static/home/start-student-with-dog.png"),
                                alt: "Illustration of a student and dog looking to the future"
                            })]
                        })
                    }), (0, N.jsxs)("div", {
                        className: "home-start__content-container",
                        children: [(0, N.jsx)("h2", {
                            className: "home-header home-header--start",
                            children: (0, N.jsx)("div", {
                                className: "type--weight-700 home-header__title",
                                children: x.whereToStart.header
                            })
                        }), (0, N.jsx)(S.Z, {
                            classModifier: "--start"
                        }), (0, N.jsx)("div", {
                            className: "type--weight-400 home-body home-body--start",
                            children: x.whereToStart.body
                        }), (0, N.jsxs)("ul", {
                            className: "home-start__ctas",
                            children: [(0, N.jsx)("li", {
                                className: "home-start__cta",
                                children: (0, N.jsx)("a", {
                                    href: (0, j.KV)(k.we.Colleges.Subdomain, "/college-quiz/"),
                                    className: "button home-button--green home-start__button-block",
                                    onClick: () => (0, w.YW)(w.KQ.Click, {
                                        label: "HP_Action_College_CollegeQuiz"
                                    }),
                                    tabIndex: 0,
                                    children: x.whereToStart.collegeQuizCta
                                })
                            }), (0, N.jsx)("li", {
                                className: "home-start__cta",
                                children: (0, N.jsx)("a", {
                                    href: (0, j.KV)(k.we.K12.Subdomain, "schools-near-you"),
                                    className: "button home-button--green home-start__button-block",
                                    onClick: () => (0, w.YW)(w.KQ.Click, {
                                        label: "HP_Action_K12_SchoolsNearYou"
                                    }),
                                    tabIndex: 0,
                                    children: x.whereToStart.k12Cta
                                })
                            })]
                        })]
                    })]
                }),
                F = s(94612);
            var O = () => ((0, i.useEffect)((() => {
                    const e = document.getElementById("partnerAnimation"),
                        a = new IntersectionObserver(((e, a) => {
                            let [s] = e;
                            s.intersectionRatio > .5 && (s.target.classList.add("home-partners__photo-container--enter"), a.unobserve(s.target))
                        }), {
                            threshold: .5
                        });
                    return e && a.observe(e), () => a.disconnect()
                }), []), (0, N.jsxs)("section", {
                    className: "home-partners",
                    children: [(0, N.jsx)(E, {
                        classModifier: "--partners"
                    }), (0, N.jsxs)("div", {
                        className: "home-partners__copy-container",
                        children: [(0, N.jsx)("h2", {
                            className: "home-header home-header--partners",
                            children: (0, N.jsx)("div", {
                                className: "type--weight-600 home-header__kicker",
                                children: x.partners.kicker
                            })
                        }), (0, N.jsx)("p", {
                            className: "type--weight-700 home-header home-header--partners home-header__title",
                            children: x.partners.title
                        }), (0, N.jsx)(S.Z, {
                            classModifier: "--partners"
                        }), (0, N.jsx)("div", {
                            className: "type--weight-400 home-body home-body--partners",
                            children: x.partners.description
                        }), (0, N.jsx)("div", {
                            className: "home-partners__cta-claim",
                            children: (0, N.jsxs)("a", {
                                className: "home-partners__cta-claim__link",
                                href: (0, j.KV)("home", "/claim-your-school/"),
                                onClick: () => (0, w.YW)(w.KQ.CTA_click, {
                                    object: "Claim-Your-School",
                                    placement: "For-Schools"
                                }),
                                tabIndex: 0,
                                children: [(0, N.jsx)("span", {
                                    "aria-label": "blue checkmark",
                                    className: "claimed-entity-icon home-partners__cta-claim__icon",
                                    role: "navigation"
                                }), (0, N.jsx)("span", {
                                    className: "type--weight-600 home-partners__cta-claim__text",
                                    children: x.partners.claimCta
                                })]
                            })
                        }), (0, N.jsx)("div", {
                            className: "home-partners__cta-learn",
                            children: (0, N.jsx)("button", {
                                className: "button home-button--green",
                                onClick: e => {
                                    e.preventDefault(), (0, w.YW)(w.KQ.CTA_click, {
                                        object: "Learn-More",
                                        placement: "For-Schools"
                                    }), (0, F.hR)("https://www.niche.com/about/niche-helps-schools-find-more-best-fit-students/", e, !1)
                                },
                                children: x.partners.learnMoreCta
                            })
                        })]
                    }), (0, N.jsxs)("div", {
                        className: "home-partners__photo-container home-partners__photo-container--animatable",
                        id: "partnerAnimation",
                        children: [(0, N.jsxs)("figure", {
                            className: "home-partners__photo home-partners__photo--photo1",
                            children: [(0, N.jsx)("div", {
                                className: "home-partners__photo__image-wrap",
                                children: (0, N.jsxs)("picture", {
                                    children: [(0, N.jsx)("source", {
                                        srcSet: (0, j.ER)("static/home/partner-dartmouth.webp"),
                                        type: "image/webp"
                                    }), (0, N.jsx)("source", {
                                        srcSet: (0, j.ER)("static/home/partner-dartmouth.jpg"),
                                        type: "image/jpeg"
                                    }), (0, N.jsx)("img", {
                                        alt: "Niche Partner: Dartmouth College",
                                        loading: "lazy",
                                        src: (0, j.ER)("static/home/partner-dartmouth.jpg")
                                    })]
                                })
                            }), (0, N.jsx)("figcaption", {
                                className: "type--weight-600 home-partners__photo__caption",
                                children: "Dartmouth College"
                            })]
                        }), (0, N.jsxs)("figure", {
                            className: "home-partners__photo home-partners__photo--photo2",
                            children: [(0, N.jsx)("div", {
                                className: "home-partners__photo__image-wrap",
                                children: (0, N.jsxs)("picture", {
                                    children: [(0, N.jsx)("source", {
                                        srcSet: (0, j.ER)("static/home/partner-nazareth-prep.webp"),
                                        type: "image/webp"
                                    }), (0, N.jsx)("source", {
                                        srcSet: (0, j.ER)("static/home/partner-nazareth-prep.jpg"),
                                        type: "image/jpeg"
                                    }), (0, N.jsx)("img", {
                                        alt: "Niche Partner: Nazareth Prep",
                                        loading: "lazy",
                                        src: (0, j.ER)("static/home/partner-nazareth-prep.jpg")
                                    })]
                                })
                            }), (0, N.jsx)("figcaption", {
                                className: "type--weight-600 home-partners__photo__caption",
                                children: "Nazareth Prep"
                            })]
                        }), (0, N.jsx)("figure", {
                            className: "home-partners__stamp",
                            children: (0, N.jsx)("img", {
                                alt: "",
                                loading: "lazy",
                                src: (0, j.ER)("static/home/stamp-claim.svg")
                            })
                        })]
                    }), (0, N.jsxs)("div", {
                        className: "home-partners__logos-wrap",
                        style: {
                            gridTemplateColumns: `repeat(${x.partners.partners.length},1fr)`
                        },
                        children: [(0, N.jsx)("div", {
                            className: "type--weight-700 home-partners__logos-title",
                            children: x.partners.logosTitle
                        }), (0, N.jsx)("ul", {
                            className: "home-partners__logos",
                            children: x.partners.partners.map((e => (0, N.jsx)("li", {
                                className: "home-partners__logo",
                                children: (0, N.jsx)("img", {
                                    alt: e.alt,
                                    className: "home-partners__logo__image",
                                    loading: "lazy",
                                    src: e.source
                                })
                            }, e.id)))
                        })]
                    })]
                })),
                W = s(10482),
                D = s(19818);
            const B = e => {
                if (e.colleges === e.k12) return `${e.colleges} Rankings`;
                let a, s;
                return parseInt(e.colleges, 10) < parseInt(e.k12, 10) ? (a = e.colleges, s = e.k12) : (a = e.k12, s = e.colleges), `${a}-${s.slice(-2)} Rankings`
            };
            var H = () => (0, N.jsxs)("section", {
                className: "home-rankings",
                children: [(0, N.jsx)(E, {
                    classModifier: "--rankings"
                }), (0, N.jsx)("h2", {
                    className: "home-header home-header--rankings",
                    children: (0, N.jsx)("div", {
                        className: "type--weight-600 home-header__kicker",
                        children: B(D.F)
                    })
                }), (0, N.jsx)("p", {
                    className: "type--weight-700 home-header home-header--rankings home-header__title",
                    children: x.rankings.title
                }), (0, N.jsx)(S.Z, {
                    classModifier: "--rankings"
                }), (0, N.jsx)("div", {
                    className: "type--weight-400 home-body home-body--rankings",
                    children: x.rankings.description
                }), (0, N.jsx)("ul", {
                    className: "home-rankings__ranks",
                    children: x.rankings.badges.map((e => {
                        return (0, N.jsx)("li", {
                            className: "home-rankings__rank",
                            children: (0, N.jsxs)("a", {
                                href: e.url,
                                className: "home-rankings__rank__link",
                                onClick: () => (0, w.YW)(w.KQ.Click, {
                                    label: e.eventLabel
                                }),
                                tabIndex: 0,
                                children: [(0, N.jsx)("figure", {
                                    className: "home-rankings__rank__badge",
                                    children: (0, N.jsx)(W.Z, {
                                        size: "large",
                                        theme: "salt",
                                        vertical: (a = e.eventLabel, "HP_Rankings_College" === a ? k.II.Colleges.Subdomain : k.II.K12.Subdomain)
                                    })
                                }), (0, N.jsx)("span", {
                                    className: "type--weight-600 home-rankings__rank__cta",
                                    children: e.title
                                })]
                            })
                        }, e.id);
                        var a
                    }))
                })]
            });
            var Y = {
                abby: {
                    name: "abby",
                    jpg1: (0, j.ER)("static/home/abby-1.jpg"),
                    webp1: (0, j.ER)("static/home/abby-1.webp"),
                    image1Alt: "Abby smiling at the camera",
                    jpg2: (0, j.ER)("static/home/abby-2.jpg"),
                    webp2: (0, j.ER)("static/home/abby-2.webp"),
                    image2Alt: "Abby standing under an outdoor arch and smiling at the camera",
                    swoosh: "home-testimonial__swoosh--abby",
                    stampClass: "home-testimonial__stamp",
                    stampImg: (0, j.ER)("static/home/stamp-found.svg"),
                    stampAlt: "I Found My Niche",
                    quote: x.testimonials.abbyQuote,
                    quoter: x.testimonials.abbyQuoter
                },
                dayna: {
                    name: "dayna",
                    jpg1: (0, j.ER)("static/home/dayna-1.jpg"),
                    webp1: (0, j.ER)("static/home/dayna-1.webp"),
                    image1Alt: "Dayna reading a book with her child",
                    jpg2: (0, j.ER)("static/home/dayna-2.jpg"),
                    webp2: (0, j.ER)("static/home/dayna-2.webp"),
                    image2Alt: "Dayna’s son posing in a green elementary graduation outfit",
                    swoosh: "home-testimonial__swoosh--dayna",
                    stampClass: "home-testimonial__stamp home-testimonial__stamp--dayna",
                    stampImg: (0, j.ER)("static/home/stamp-dayna.svg"),
                    stampAlt: "I Found Our Best-Fit School On Niche",
                    quote: x.testimonials.daynaQuote,
                    quoter: x.testimonials.daynaQuoter
                },
                clay: {
                    name: "clay",
                    jpg1: (0, j.ER)("static/home/clay-1.jpg"),
                    webp1: (0, j.ER)("static/home/clay-1.webp"),
                    image1Alt: "Clay smiling at the camera while leaning on a bridge railing",
                    jpg2: (0, j.ER)("static/home/clay-2.jpg"),
                    webp2: (0, j.ER)("static/home/clay-2.webp"),
                    image2Alt: "Clay sitting and enjoying the sunlight on a campus lawn",
                    swoosh: "home-testimonial__swoosh--clay",
                    stampClass: "home-testimonial__stamp",
                    stampImg: (0, j.ER)("static/home/stamp-clay.svg"),
                    stampAlt: "I Found My Best-Fit School On Niche",
                    quote: x.testimonials.clayQuote,
                    quoter: x.testimonials.clayQuoter
                }
            };
            var Z = e => {
                let {
                    slide: a,
                    isActive: s,
                    isDebut: t
                } = e;
                const [o, r] = (0, i.useState)(!1), n = (0, l.v9)((e => e.app.isMobile));
                return (0, i.useEffect)((() => {
                    const e = document.getElementById("testimonialAnimation"),
                        a = new IntersectionObserver(((e, a) => {
                            let [s] = e;
                            s.intersectionRatio > 0 && (r(!0), a.unobserve(s.target))
                        }), {
                            threshold: .5
                        });
                    return e && a.observe(e), () => a.disconnect()
                }), []), (0, N.jsxs)("li", {
                    "aria-hidden": !s,
                    className: (() => {
                        let e = "home-testimonial__slide";
                        return s && t && (e += " home-testimonial__slide--debut"), o && s && (e += " home-testimonial__slide--active"), e
                    })(),
                    children: [(0, N.jsxs)("div", {
                        className: (() => {
                            let e = "home-testimonial__canvas ";
                            return o && n && !t ? e += " home-testimonial__canvas--static" : o && s && t && a.name === Y.abby.name ? e += " home-testimonial__canvas--debut" : o && s && (e += " home-testimonial__canvas--enter"), e
                        })(),
                        children: [(0, N.jsx)("div", {
                            className: "home-testimonial__pic-1",
                            id: "testimonialAnimation",
                            children: (0, N.jsxs)("picture", {
                                children: [(0, N.jsx)("source", {
                                    srcSet: a.webp1,
                                    type: "image/webp"
                                }), (0, N.jsx)("source", {
                                    srcSet: a.jpg1,
                                    type: "image/jpeg"
                                }), (0, N.jsx)("img", {
                                    alt: a.image1Alt,
                                    loading: "lazy",
                                    src: a.jpg1
                                })]
                            })
                        }), (0, N.jsx)("div", {
                            className: "home-testimonial__pic-2",
                            children: (0, N.jsxs)("picture", {
                                children: [(0, N.jsx)("source", {
                                    srcSet: a.webp2,
                                    type: "image/webp"
                                }), (0, N.jsx)("source", {
                                    srcSet: a.jpg2,
                                    type: "image/jpeg"
                                }), (0, N.jsx)("img", {
                                    alt: a.image2Alt,
                                    loading: "lazy",
                                    src: a.jpg2
                                })]
                            })
                        }), (0, N.jsx)("div", {
                            "aria-hidden": !0,
                            className: a.swoosh
                        }), (0, N.jsx)("div", {
                            "aria-hidden": !0,
                            className: a.stampClass,
                            children: (0, N.jsx)("img", {
                                alt: a.stampAlt,
                                loading: "lazy",
                                src: a.stampImg
                            })
                        })]
                    }, a.quoter), (0, N.jsx)("div", {
                        className: (() => {
                            let e = "home-testimonial__quote";
                            switch (a.name) {
                                case Y.abby.name:
                                    e += " home-testimonial__quote--abby";
                                    break;
                                case Y.dayna.name:
                                    e += " home-testimonial__quote--dayna";
                                    break;
                                default:
                                    e += " home-testimonial__quote--clay"
                            }
                            return t && a.name === Y.abby.name ? e += " home-testimonial__quote--debut" : o && s && (e += " home-testimonial__quote--enter"), e
                        })(),
                        children: a.quote
                    }), (0, N.jsx)("div", {
                        className: (() => {
                            let e = "home-testimonial__quoter";
                            return t && a.name === Y.abby.name ? e += " home-testimonial__quoter--debut" : o && s && (e += " home-testimonial__quoter--enter"), e
                        })(),
                        children: a.quoter
                    })]
                })
            };
            let V = null;
            var G = () => {
                const e = Y.abby,
                    a = Y.dayna,
                    s = Y.clay,
                    [t, o] = (0, i.useState)(e),
                    [r, n] = (0, i.useState)(!1),
                    c = (0, l.v9)((e => e.app.isMobile)),
                    h = (0, i.useRef)(""),
                    m = (0, i.useRef)(!0),
                    d = (0, i.useRef)(!0),
                    u = (0, i.useRef)(!0),
                    p = (0, i.useRef)(r),
                    g = (0, i.useRef)(null),
                    _ = i => {
                        switch (i) {
                            case e.name:
                                return h.current = t.name, o(e);
                            case a.name:
                                return h.current = t.name, o(a);
                            default:
                                return h.current = t.name, o(s)
                        }
                    },
                    b = e => {
                        let a = "carousel-dot";
                        return e === t && (a += " carousel-dot--active"), a
                    };
                return (0, i.useEffect)((() => {
                    const e = document.getElementById("testimonialCarousel"),
                        a = new IntersectionObserver((e => {
                            let [a] = e;
                            !p.current && a.intersectionRatio > .5 && n(!0), p.current && a.intersectionRatio < .5 && n(!1)
                        }), {
                            threshold: .5
                        });
                    return e && a.observe(e), () => {
                        a.disconnect()
                    }
                }), []), (0, i.useEffect)((() => {
                    switch (p.current = r, h.current) {
                        case e.name:
                            m.current = !1;
                            break;
                        case a.name:
                            d.current = !1;
                            break;
                        case s.name:
                            u.current = !1
                    }
                })), (0, N.jsxs)("section", {
                    className: "home-testimonial",
                    id: "testimonialCarousel",
                    children: [(0, N.jsx)(q, {}), (0, N.jsx)("h2", {
                        className: "home-header home-header--testimonial",
                        children: (0, N.jsx)("div", {
                            className: "home-testimonial__kicker",
                            children: x.testimonials.kicker
                        })
                    }), (0, N.jsx)("p", {
                        className: "home-testimonial__title",
                        children: x.testimonials.title
                    }), (0, N.jsxs)("div", {
                        className: "home-testimonial__carousel home-testimonial__carousel--animatable home-testimonial__carousel--make-slides",
                        children: [(0, N.jsxs)("div", {
                            "aria-hidden": c,
                            className: "carousel-dots",
                            children: [(0, N.jsx)("button", {
                                "aria-current": t === e,
                                "aria-label": "Go to slide 1",
                                className: b(e),
                                disabled: c,
                                onClick: () => _(e.name),
                                onFocus: () => {
                                    _(e.name)
                                }
                            }), (0, N.jsx)("button", {
                                "aria-current": t === a,
                                "aria-label": "Go to slide 2",
                                className: b(a),
                                disabled: c,
                                onClick: () => _(a.name),
                                onFocus: () => {
                                    _(a.name)
                                }
                            }), (0, N.jsx)("button", {
                                "aria-current": t === s,
                                "aria-label": "Go to slide 3",
                                className: b(s),
                                disabled: c,
                                onClick: () => _(s.name),
                                onFocus: () => {
                                    _(s.name)
                                }
                            })]
                        }), (0, N.jsxs)("ul", {
                            className: "home-testimonial__slides",
                            id: "carouselSlides",
                            onScroll: t => {
                                g.current || (g.current = t.target), V && clearTimeout(V), V = setTimeout((() => {
                                    const t = g.current.scrollLeft,
                                        o = g.current.clientWidth;
                                    t % o == 0 && (t => {
                                        switch (t) {
                                            case 1:
                                                return _(a.name);
                                            case 2:
                                                return _(s.name);
                                            default:
                                                _(e.name)
                                        }
                                    })(t / o), V = null
                                }), 150)
                            },
                            children: [(0, N.jsx)(Z, {
                                isActive: t.name === e.name,
                                isDebut: m.current,
                                slide: e
                            }), (0, N.jsx)(Z, {
                                isActive: t.name === a.name,
                                isDebut: d.current,
                                slide: a
                            }), (0, N.jsx)(Z, {
                                isActive: t.name === s.name,
                                isDebut: u.current,
                                slide: s
                            })]
                        })]
                    })]
                })
            };

            function $(e, a) {
                let {
                    cookies: s
                } = e, {
                    executeAction: t
                } = a;
                const {
                    regValuePropSend: r
                } = (0, g.jI)(), n = (0, l.I0)(), _ = (0, l.v9)((e => (0, c.Qb)(e.user))), j = (0, i.useCallback)((async e => {
                    let {
                        modality: a
                    } = e;
                    const o = {
                        loginInstanceId: h.Z.SOCIAL_LOGIN_GLOBAL_ACCOUNT,
                        regInstanceId: h.Z.REG_FORM_GLOBAL_ACCOUNT,
                        registrationReason: p.IL.GENERAL,
                        regModality: a
                    };
                    t(d.Z, {
                        childProps: o,
                        cookies: s
                    })
                }), [s, t]), x = (0, i.useCallback)((() => {
                    _ ? (n((0, m.Z)({
                        required: !0
                    })), n((0, u.Z)({
                        cookies: s
                    }))) : j({
                        modality: !0
                    })
                }), [n, s, _, j]);
                return (0, i.useEffect)((() => {
                    var e;
                    (0, y.sE)(), r && j({
                        modality: !1
                    });
                    o()(e = window.location.search).call(e, b.Xj) && (x(), history.replaceState(null, "", b.qw))
                }), [s, n, _, r, j, x]), (0, N.jsxs)("main", {
                    className: "home-overview-wrap",
                    children: [(0, N.jsx)(C, {}), (0, N.jsx)(A, {
                        triggerRegOrNavigate: x
                    }), (0, N.jsx)(I, {}), (0, N.jsx)(G, {}), (0, N.jsx)(Q, {}), (0, N.jsx)(T, {}), (0, N.jsx)(H, {}), (0, N.jsx)(O, {}), (0, N.jsx)(P, {})]
                })
            }
            $.contextTypes = {
                executeAction: n().func
            };
            var J = (0, _.Z)($)
        },
        40557: function(e, a, s) {
            var t = s(85893);
            a.Z = e => {
                let {
                    classModifier: a
                } = e;
                return (0, t.jsx)("div", {
                    className: "home-squiggle " + (a ? `home-squiggle${a}` : ""),
                    children: (0, t.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 186 17",
                        fill: "none",
                        children: (0, t.jsx)("path", {
                            d: "M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"
                        })
                    })
                })
            }
        },
        19818: function(e, a, s) {
            s.d(a, {
                F: function() {
                    return i
                },
                J: function() {
                    return o
                }
            });
            var t = s(97948);
            const o = {
                    [t.we.Local.Subdomain]: "March 17, 2023", [t.we.Colleges.Subdomain]: "August 25, 2023", [t.we.K12.Subdomain]: "September 22, 2023"
                },
                i = {
                    [t.we.Local.Subdomain]: "2023", [t.we.Colleges.Subdomain]: "2024", [t.we.K12.Subdomain]: "2024"
                }
        }
    }
]);