import { i as __toESM } from "../_runtime.mjs";
import { n as Slot, o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Settings2, c as Check, i as ShieldCheck, l as ChartLine, n as Wallet, o as Play, s as Eye, t as X, u as Banknote } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as Area, c as ReferenceLine, i as XAxis, l as ResponsiveContainer, n as AreaChart, o as Line, r as YAxis, s as CartesianGrid, t as ComposedChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CpaTK4OU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function krw(n) {
	const rounded = Math.round(n);
	const abs = Math.abs(rounded).toLocaleString("ko-KR");
	return `${rounded < 0 ? "-" : ""}₩${abs}`;
}
function signedKrw(n) {
	const rounded = Math.round(n);
	const abs = Math.abs(rounded).toLocaleString("ko-KR");
	if (rounded > 0) return `+₩${abs}`;
	if (rounded < 0) return `-₩${abs}`;
	return "₩0";
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setOn(true);
		}, {
			threshold: .16,
			rootMargin: "0px 0px -6% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", on && "reveal-on", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
var CHARGERS = [
	{
		id: "A-01",
		state: "충전중",
		kwh: 18.4,
		tone: "live"
	},
	{
		id: "A-02",
		state: "대기",
		kwh: 0,
		tone: "fog"
	},
	{
		id: "A-03",
		state: "충전중",
		kwh: 7.2,
		tone: "live"
	},
	{
		id: "B-01",
		state: "대기",
		kwh: 0,
		tone: "fog"
	},
	{
		id: "B-02",
		state: "대기",
		kwh: 0,
		tone: "fog"
	}
];
function DashboardPreview({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl bg-ink-2/92 p-4 shadow-border backdrop-blur-sm", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.16em] text-fog uppercase",
					children: "Live Monitor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-[11px] text-orange",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-orange" }), "실시간"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "오늘 충전",
						value: "126 kWh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "적용 요금",
						value: "250원"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "오늘 매출",
						value: "₩31,500"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1.5",
				children: CHARGERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-lg bg-ink/60 px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", c.tone === "live" ? "bg-orange" : "bg-fog/70") }), c.id]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-fog",
							children: c.state
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums text-sm",
							children: c.kwh > 0 ? `${c.kwh.toFixed(1)} kWh` : "—"
						})
					]
				}, c.id))
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-ink/60 px-2.5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] text-fog",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-sm font-medium tabular-nums",
			children: value
		})]
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-11 w-full touch-none items-center", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full rounded-full bg-paper/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-orange" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-paper shadow-border after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange" })]
	});
}
function SliderPaper({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-11 w-full touch-none items-center", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full rounded-full bg-ink/12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-ember" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-ink after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember" })]
	});
}
function ClientOnly({ children, fallback = null }) {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOn(true), []);
	return on ? children : fallback;
}
var KWH = 200;
var MARKET = 350;
function RatePlayground() {
	const [rate, setRate] = (0, import_react.useState)(200);
	const mine = rate * KWH;
	const theirs = MARKET * KWH;
	const save = theirs - mine;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-paper-2 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ink/50",
					children: "단지 설정 요금"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-display text-4xl tracking-tight tabular-nums",
					children: [rate, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 text-lg text-ink/50",
						children: "원/kWh"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-right text-sm text-ember",
					children: [
						"시중 대비",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums",
							children: krw(save)
						}),
						" 절감"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-11" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderPaper, {
					className: "mt-6",
					min: 150,
					max: 400,
					step: 10,
					value: [rate],
					onValueChange: (v) => setRate(v[0] ?? 200),
					"aria-label": "충전 요금"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex justify-between text-[11px] text-ink/45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "150원" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "400원" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-paper px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
						className: "text-xs text-ink/50",
						children: [
							"단지 요금 · 월 ",
							KWH,
							"kWh"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-lg font-medium tabular-nums",
						children: krw(mine)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-paper px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
						className: "text-xs text-ink/50",
						children: [
							"시중 ",
							MARKET,
							"원 기준"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-lg font-medium tabular-nums text-ink/45 line-through",
						children: krw(theirs)
					})]
				})]
			})
		]
	});
}
var POINTS$1 = [
	{
		icon: Wallet,
		title: "낮은 충전 요금 설정",
		body: "입주민이 부담하는 충전비를 대폭 낮출 수 있습니다. 남이 정한 요금이 아니라, 단지가 정하는 요금입니다."
	},
	{
		icon: ShieldCheck,
		title: "관리 걱정 ZERO",
		body: "운영 지식·인력·경험 없이도 충전소를 돌립니다. 관제·정산·상태는 시스템이 맡습니다."
	},
	{
		icon: Eye,
		title: "24시간 실시간 모니터링",
		body: "충전기 상태와 사용량을 한 화면에서 봅니다. 관리사무소에 별도의 당직이 필요 없습니다."
	}
];
function Apartment() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-10 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-4 flex items-center gap-3 text-[11px] tracking-[0.22em] text-ember uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm tracking-normal",
							children: "02"
						}), "공용주택"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl leading-snug font-semibold tracking-[-0.03em] md:text-4xl",
						children: [
							"입주민이 직접 정하는",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"합리적인 충전 요금"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[15px] leading-relaxed text-ink/70",
						children: "아파트·오피스텔은 수익보다 입주민 복지가 먼저입니다. 전기비와 운영비만 맞추면, 시중 CPO보다 훨씬 낮은 요금으로 단지를 운영할 수 있습니다."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-6",
					children: POINTS$1.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80 * (i + 1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
									className: "size-4 text-ember",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-ink/65",
								children: p.body
							})] })]
						})
					}, p.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/apartment.jpg",
						alt: "아파트 주차장의 전기차 충전기",
						className: "aspect-[4/3] w-full object-cover framed-paper"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block md:absolute md:bottom-5 md:left-5 md:w-[300px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPreview, {})
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPreview, {})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink/8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.18em] text-ember uppercase",
						children: "입주민 요금 체험"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-3 font-display text-2xl tracking-tight",
						children: [
							"한 달 충전비,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"요금을 낮추면 이렇게 달라집니다."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-ink/65",
						children: "월 200kWh를 쓰는 입주민 기준입니다. 슬라이더로 단지가 정하는 kWh당 요금을 바꿔 보세요."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatePlayground, {})
				})]
			})
		})]
	});
}
var POINTS = [
	{
		icon: Settings2,
		title: "전력·운영비를 보고 요금을 책정",
		body: "전기 기본요금, 사용량, 통신·콜센터 옵션까지 반영해 단지가 아니라 사업자가 마진을 정합니다."
	},
	{
		icon: Banknote,
		title: "복잡한 위탁 없이 이익 수취",
		body: "지금까지 CPO가 가져가던 매출을 시설 주인이 직접 받습니다. 수익 사업으로 전환할 수 있습니다."
	},
	{
		icon: ChartLine,
		title: "사용량만 받쳐 주면 흑자 구조",
		body: "5기 운영 · 월 500kWh/기 · 320원 모델 기준, 연간 이익 약 440만 원. 시뮬레이터에서 바로 확인해 보세요."
	}
];
function Commercial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "biz",
		className: "relative bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-12 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative md:col-span-6 md:order-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/commercial.jpg",
						alt: "상업시설 주차장의 전기차 충전 인프라",
						className: "aspect-[4/3] w-full object-cover framed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block md:absolute md:bottom-5 md:left-5 md:w-[260px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-ink-2 p-5 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-fog uppercase",
									children: "수익형 모델"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-3xl tracking-tight tabular-nums text-orange",
									children: krw(4396e3)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-mist",
									children: "연간 손익 · 5기 · 500kWh · 320원"
								})
							]
						})
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-ink-2 p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-fog uppercase",
								children: "수익형 모델"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl tracking-tight tabular-nums text-orange",
								children: krw(4396e3)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-mist",
								children: "연간 손익 · 5기 · 500kWh · 320원"
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6 md:order-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-4 flex items-center gap-3 text-[11px] tracking-[0.22em] text-orange uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm tracking-normal",
							children: "03"
						}), "상업시설"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl leading-snug font-semibold tracking-[-0.03em] md:text-4xl",
						children: [
							"직접 설정하는",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"스마트한 수익 모델"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-[15px] leading-relaxed text-mist",
						children: "전력 및 운영비를 고려해 최적 요금을 직접 책정하세요. 복잡한 절차 없이 이익을 수취할 수 있습니다."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-6",
					children: POINTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80 * (i + 1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 shadow-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
									className: "size-4 text-orange",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium text-paper",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-fog",
								children: p.body
							})] })]
						})
					}, p.title))
				})]
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap select-none transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange", {
	variants: {
		variant: {
			primary: "bg-orange text-ink hover:bg-orange/90",
			invert: "bg-ink text-paper hover:bg-ink/85",
			ghost: "bg-transparent text-paper shadow-[0_0_0_1px_rgb(243_239_230/0.16)] hover:bg-paper/6",
			paper: "bg-paper text-ink hover:bg-paper/90",
			quiet: "bg-ink-3 text-paper hover:bg-ink-2 shadow-border"
		},
		size: {
			sm: "h-9 px-3.5 text-sm rounded-md",
			md: "h-11 px-5 text-sm rounded-lg",
			lg: "h-12 px-6 text-[15px] rounded-xl"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var useInquiry = create((set) => ({
	open: false,
	setOpen: (open) => set({ open })
}));
var PILLS = [
	"내 맘대로 요금 설정",
	"충전기 10기 무료 등록",
	"모니터링 페이지"
];
function Cta() {
	const setOpen = useInquiry((s) => s.setOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "start",
		className: "relative overflow-hidden bg-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/charger.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-3xl px-5 py-28 text-center md:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-5 flex items-center justify-center gap-3 text-xs tracking-widest text-orange uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm tracking-normal",
							children: "05"
						}), "시작하기"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mb-8 flex flex-wrap justify-center gap-2",
						children: PILLS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full bg-ink-3 px-3.5 py-1.5 text-xs text-mist shadow-border",
							children: p
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl leading-snug font-semibold tracking-tight text-paper md:text-5xl md:leading-tight",
						children: [
							"저렴한 요금.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"수익 창출.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"뭐든지 가능합니다."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-md text-mist",
						children: "evCloud 2.0, 지금 바로 시작해 보세요."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-8",
						onClick: () => setOpen(true),
						children: "무료로 시작하기"
					})
				] })
			})
		]
	});
}
var ITEMS = [
	{
		q: "정말 무료인가요?",
		a: "충전기 10기까지 시스템 연동 무료입니다. 초과분은 1기·1개소당 월 1만 원입니다."
	},
	{
		q: "운영 인력이 필요한가요?",
		a: "없습니다. evCloud가 관제·현황·요금 설정을 담당합니다. 콜센터와 A/S는 필요할 때만 옵션으로 붙입니다."
	},
	{
		q: "요금은 어떻게 정하나요?",
		a: "Basic은 단일 요금제를 직접 설정합니다. 입주민 복지형으로 낮출 수도, 상업시설 수익형으로 맞출 수도 있습니다."
	},
	{
		q: "정산은 직접 해야 하나요?",
		a: "직접 정산하거나, 타이드 PG 위탁(매출의 5%)을 선택할 수 있습니다."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight",
					children: "자주 묻는 질문"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-8",
				children: ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group border-t border-paper/10 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium",
							children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fog transition-transform duration-200 group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-relaxed text-fog",
							children: item.a
						})]
					})
				}, item.q))
			})]
		})
	});
}
function Logo({ className, mark = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2", className),
		children: [mark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 28 28",
			className: "size-7 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "28",
					height: "28",
					rx: "8",
					className: "fill-orange"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 16.5c0-3.4 2.4-6.2 6-6.2 2.4 0 4.5 1.3 5.5 3.2",
					className: "stroke-ink",
					strokeWidth: "1.8",
					fill: "none",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M19.6 11.2v3.2h-3.1",
					className: "stroke-ink",
					strokeWidth: "1.8",
					fill: "none",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "10.2",
					cy: "19.2",
					r: "1.15",
					className: "fill-ink"
				})
			]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline gap-1.5 leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[1.05em] font-semibold tracking-tight",
				children: "evCloud"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.68em] font-medium text-orange",
				children: "2.0"
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-paper/10 bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fog",
				children: "미래 에너지 생활을 설계합니다."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-fog",
				children: "타이드테크놀로지 · evCloud 2.0 사업모델 정책안 기반 소개 페이지"
			})]
		})
	});
}
function Hero() {
	const setOpen = useInquiry((s) => s.setOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "problem",
		className: "relative min-h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "지하주차장에 설치된 전기차 충전기",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pt-24 pb-16 md:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-5 flex items-center gap-3 text-[11px] tracking-[0.22em] text-orange uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm tracking-normal",
							children: "01"
						}), "문제제기"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "max-w-3xl font-display text-[2.05rem] leading-[1.22] font-semibold tracking-[-0.03em] text-paper sm:text-5xl md:text-[3.4rem] md:leading-[1.18]",
						children: [
							"전기차 충전기,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"왜 항상 남이 정한",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"비싼 요금으로 써야 할까요?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base text-mist md:text-lg",
						children: "이제 직접 요금을 정하고, 관리는 편하게."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							onClick: () => setOpen(true),
							children: "무료로 시작하기"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "ghost",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#sim",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 fill-current" }), "요금 시뮬레이터"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-paper/10 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
								value: "10기",
								label: "시스템 연동 무료"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
								value: "0",
								label: "운영 인력 필요"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
								value: "24h",
								label: "실시간 모니터링"
							})
						]
					})
				]
			})
		]
	});
}
function HeroStat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-display text-2xl tracking-tight text-paper md:text-3xl",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-xs text-fog",
		children: label
	})] });
}
var STEPS = [
	{
		n: "01",
		title: "무료로 가입하고 충전기를 등록합니다",
		body: "충전기 10기, 충전소 5개소까지 시스템 연동은 무료입니다. 이미 타이드가 연동한 모델은 바로 붙습니다."
	},
	{
		n: "02",
		title: "단지가 원하는 요금을 직접 넣습니다",
		body: "복지형·밸런스형·수익형, 어떤 숫자든 시설 주인이 정합니다. 남이 정한 요금을 그대로 쓸 필요가 없습니다."
	},
	{
		n: "03",
		title: "모니터링만 하고, 운영은 시스템이 합니다",
		body: "실시간 현황, 선택적 콜센터·A/S·통신. 운영 리소스 없이 낮은 요금으로, 또는 수익 사업으로."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-orange uppercase",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl tracking-tight md:text-4xl",
						children: "가입하고, 요금을 정하고, 보기만 하면 됩니다."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "hidden overflow-hidden rounded-2xl md:col-span-5 md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/charger.jpg",
						alt: "충전기 커넥터와 민트빛 상태 링",
						className: "aspect-[4/3] w-full object-cover framed"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-8 md:grid-cols-3 md:gap-10",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-paper/10 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-orange",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-medium leading-snug",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-fog",
								children: s.body
							})
						]
					})
				}, s.n))
			})]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg bg-ink-3 px-3.5 text-sm text-paper placeholder:text-fog shadow-border outline-none transition-[box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-sm font-medium text-mist", className),
		...props
	});
}
var STORAGE_KEY = "evcloud-inquiries";
function InquiryDialog() {
	const open = useInquiry((s) => s.open);
	const setOpen = useInquiry((s) => s.setOpen);
	const [sending, setSending] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form).entries());
		setSending(true);
		const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
		prev.push({
			...data,
			at: (/* @__PURE__ */ new Date()).toISOString()
		});
		localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
		window.setTimeout(() => {
			setSending(false);
			setOpen(false);
			form.reset();
			toast.success("도입 문의가 접수되었습니다. 담당자가 연락드립니다.");
		}, 420);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-1/2 left-1/2 z-50 w-[min(92vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-ink-2 p-6 shadow-border focus:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-xl text-paper",
					children: "도입 문의"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 text-sm text-fog",
					children: "충전기 10기까지 시스템 연동은 무료입니다."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "relative size-11 rounded-lg text-mist hover:bg-paper/6",
						"aria-label": "닫기",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2" })
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3.5",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "name",
						label: "이름",
						required: true,
						placeholder: "홍길동"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "phone",
						label: "연락처",
						required: true,
						placeholder: "010-0000-0000",
						type: "tel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "site",
						label: "시설명",
						placeholder: "○○아파트 / ○○빌딩"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "kind",
							children: "시설 유형"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "kind",
							name: "kind",
							className: "h-11 w-full rounded-lg bg-ink-3 px-3.5 text-sm text-paper shadow-border outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
							defaultValue: "아파트",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "아파트" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "오피스텔" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "상업시설" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "사옥 · 주차장" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "기타" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "chargers",
						label: "충전기 대수",
						placeholder: "예: 8",
						type: "number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "note",
							children: "문의 내용"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "note",
							name: "note",
							rows: 3,
							className: "resize-none rounded-lg bg-ink-3 px-3.5 py-2.5 text-sm text-paper placeholder:text-fog shadow-border outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
							placeholder: "원하시는 요금 모델이나 현재 운영 방식을 알려주세요."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-2.5 text-xs leading-5 text-fog",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							required: true,
							className: "mt-0.5 size-4 accent-orange",
							name: "agree"
						}), "도입 상담을 위해 이름·연락처를 수집하는 데 동의합니다."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-1 w-full",
						disabled: sending,
						children: sending ? "접수 중…" : "무료로 시작하기"
					})
				]
			})]
		})] })
	});
}
function Field({ name, label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: name,
			name,
			...props
		})]
	});
}
var LINKS = [
	{
		href: "#problem",
		id: "problem",
		n: "01",
		label: "문제"
	},
	{
		href: "#home",
		id: "home",
		n: "02",
		label: "공용주택"
	},
	{
		href: "#biz",
		id: "biz",
		n: "03",
		label: "상업시설"
	},
	{
		href: "#sim",
		id: "sim",
		n: "04",
		label: "시뮬레이터"
	},
	{
		href: "#start",
		id: "start",
		n: "05",
		label: "시작"
	}
];
function Nav() {
	const setOpen = useInquiry((s) => s.setOpen);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("problem");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
		const io = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (vis?.target.id) setActive(vis.target.id);
		}, {
			threshold: [.25, .45],
			rootMargin: "-20% 0px -40% 0px"
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled ? "bg-ink/85 shadow-border backdrop-blur-md" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#problem",
					className: "text-paper",
					"aria-label": "evCloud 2.0 홈",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "섹션",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: cn("text-[13px] tracking-wide transition-colors duration-150", active === l.id ? "text-orange" : "text-mist hover:text-paper"),
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setOpen(true),
					children: "도입 문의"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "pointer-events-none fixed top-1/2 right-5 z-30 hidden -translate-y-1/2 lg:block",
		"aria-label": "챕터",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "pointer-events-auto flex flex-col gap-3",
			children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: l.href,
				className: "group flex items-center justify-end gap-3",
				"aria-current": active === l.id ? "true" : void 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("text-[11px] tracking-widest uppercase transition-opacity duration-150", active === l.id ? "text-orange opacity-100" : "text-fog opacity-0 group-hover:opacity-100"),
					children: [
						l.n,
						" ",
						l.label
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px transition-[width,background-color] duration-200", active === l.id ? "w-8 bg-orange" : "w-4 bg-paper/25 group-hover:w-6") })]
			}) }, l.id))
		})
	})] });
}
var BASIC = [
	"충전기 10기 이하 시스템 연동 무료",
	"충전소 5개소 이하 연동 무료",
	"단일 요금제 직접 설정",
	"기본 대시보드",
	"가입 제한 없음"
];
var OPTIONS = [
	{
		name: "초과 충전기 연동",
		price: "1기당 월 10,000원"
	},
	{
		name: "초과 충전소 연동",
		price: "1개소당 월 10,000원"
	},
	{
		name: "통신 모뎀 요금",
		price: "월 8,900원"
	},
	{
		name: "라우터 구매",
		price: "최초 30,000원"
	},
	{
		name: "365일 24시간 콜센터",
		price: "월 10,000원/기"
	},
	{
		name: "PG 위탁 정산",
		price: "매출의 5%"
	}
];
function Pricing() {
	const setOpen = useInquiry((s) => s.setOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "price",
		className: "bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.18em] text-ember uppercase",
				children: "Basic"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-3 max-w-xl font-display text-3xl tracking-tight md:text-4xl",
				children: [
					"관리 시스템은 무료.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"필요할 때만 옵션을 붙입니다."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-2xl bg-ink p-7 text-paper lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-orange uppercase",
							children: "Basic · 무료"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-5xl tracking-tight",
							children: "₩0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fog",
							children: "충전기 10기 · 충전소 5개소까지"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-3",
							children: BASIC.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5 text-sm text-mist",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-0.5 size-4 shrink-0 text-orange",
									strokeWidth: 1.75
								}), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-8 w-full",
							size: "lg",
							onClick: () => setOpen(true),
							children: "무료로 시작하기"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "rounded-2xl bg-paper-2 p-7 lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-ember uppercase",
							children: "선택 옵션"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink/60",
							children: "운영에 필요한 것만 켜면 됩니다. 안 쓰면 비용이 없습니다."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 divide-y divide-ink/8",
							children: OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline justify-between gap-4 py-3.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 tabular-nums text-ink/55",
									children: o.price
								})]
							}, o.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs leading-relaxed text-ink/45",
							children: "A/S는 이슈 발생 시 출장비 6만 원(자재·공임 별도). Pro(100기 이상)·Enterprise는 수량 단가 및 커스터마이징으로 별도 협의합니다."
						})
					]
				})]
			})]
		})
	});
}
/** Operating-case numbers from the evCloud 2.0 BM deck (5-charger site, annual P&L). */
var OPEX_PER_CHARGER = 87800;
var EXTRA_CHARGER_FEE = 1e4;
var PG_RATE = .05;
/** Electricity cost for a 5-charger site at given kWh/charger/month (same period as the deck). */
var ELEC_COST_5 = [
	[100, 182e4],
	[200, 2556e3],
	[300, 3293e3],
	[400, 4029e3],
	[500, 4765e3],
	[700, 6974e3],
	[1e3, 8447e3]
];
var MODELS = [
	{
		id: "welfare",
		name: "복지형",
		rate: 200,
		blurb: "입주민 부담을 낮추는 요금",
		caption: "공용주택 · 입주민 복지"
	},
	{
		id: "balance",
		name: "밸런스형",
		rate: 250,
		blurb: "비용과 수익의 균형",
		caption: "단지 · 사옥 표준"
	},
	{
		id: "profit",
		name: "수익형",
		rate: 320,
		blurb: "운영 이익을 극대화",
		caption: "상업시설 · 수익 사업"
	}
];
function electricityCost(kwhPerCharger, chargers) {
	const table = ELEC_COST_5;
	const x = Math.min(1e3, Math.max(100, kwhPerCharger));
	let lo = table[0];
	let hi = table[table.length - 1];
	for (let i = 0; i < table.length - 1; i++) {
		const a = table[i];
		const b = table[i + 1];
		if (x >= a[0] && x <= b[0]) {
			lo = a;
			hi = b;
			break;
		}
	}
	const t = hi[0] === lo[0] ? 0 : (x - lo[0]) / (hi[0] - lo[0]);
	return (lo[1] + (hi[1] - lo[1]) * t) / 5 * chargers;
}
function evCloudFeeMonthly(chargers) {
	return Math.max(0, chargers - 10) * EXTRA_CHARGER_FEE;
}
function simulate({ chargers, kwh, rate, includePg }) {
	const revenue = rate * kwh * chargers * 12;
	const opex = OPEX_PER_CHARGER * chargers;
	const electricity = electricityCost(kwh, chargers);
	const platform = evCloudFeeMonthly(chargers) * 12;
	const pg = includePg ? revenue * PG_RATE : 0;
	const spend = opex + electricity + platform + pg;
	const profit = revenue - spend;
	return {
		revenue,
		opex,
		electricity,
		platform,
		pg,
		spend,
		profit,
		monthly: profit / 12
	};
}
function profitCurve(chargers, rate, includePg) {
	return [
		100,
		200,
		300,
		400,
		500,
		700,
		1e3
	].map((kwh) => ({
		kwh,
		profit: simulate({
			chargers,
			kwh,
			rate,
			includePg
		}).profit
	}));
}
function kwhAtMonth(month, startKwh, targetKwh, rampMonths) {
	if (rampMonths <= 1) return targetKwh;
	const t = Math.min(1, (month - 1) / (rampMonths - 1));
	return startKwh + (targetKwh - startKwh) * t;
}
function rampTimeline({ chargers, rate, startKwh, targetKwh, rampMonths, includePg, horizon = 24 }) {
	const points = [];
	let cumulative = 0;
	let savedCum = 0;
	let turnMonth = null;
	let recoverMonth = null;
	for (let month = 1; month <= horizon; month++) {
		const kwh = Math.round(kwhAtMonth(month, startKwh, targetKwh, rampMonths));
		const monthly = simulate({
			chargers,
			kwh,
			rate,
			includePg
		}).monthly;
		cumulative += monthly;
		const saved = Math.max(0, 350 - rate) * kwh * chargers;
		savedCum += saved;
		if (turnMonth === null && monthly >= 0) turnMonth = month;
		if (recoverMonth === null && cumulative >= 0) recoverMonth = month;
		points.push({
			month,
			kwh,
			monthly,
			cumulative,
			saved,
			savedCum
		});
	}
	return {
		points,
		turnMonth,
		recoverMonth
	};
}
var ORANGE$1 = "#FF7A3A";
var MIST = "#8A918C";
function BreakEven() {
	const [model, setModel] = (0, import_react.useState)("welfare");
	const [rate, setRate] = (0, import_react.useState)(200);
	const [chargers, setChargers] = (0, import_react.useState)(5);
	const [startKwh, setStartKwh] = (0, import_react.useState)(100);
	const [targetKwh, setTargetKwh] = (0, import_react.useState)(450);
	const [rampMonths, setRampMonths] = (0, import_react.useState)(12);
	const [chartReady, setChartReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setChartReady(true), []);
	function pickModel(id) {
		const next = MODELS.find((m) => m.id === id);
		setModel(id);
		setRate(next.rate);
	}
	function onRate(next) {
		setRate(next);
		setModel(MODELS.find((m) => m.rate === next)?.id ?? "custom");
	}
	const { points, turnMonth, recoverMonth } = (0, import_react.useMemo)(() => rampTimeline({
		chargers,
		rate,
		startKwh: Math.min(startKwh, targetKwh),
		targetKwh: Math.max(startKwh, targetKwh),
		rampMonths,
		includePg: false
	}), [
		chargers,
		rate,
		startKwh,
		targetKwh,
		rampMonths
	]);
	const turn = turnMonth ? points[turnMonth - 1] : null;
	const last = points[points.length - 1];
	const safeStart = Math.min(startKwh, targetKwh);
	const safeTarget = Math.max(startKwh, targetKwh);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "sim-ramp",
		className: "mt-20 border-t border-paper/10 pt-20 md:mt-28 md:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-orange uppercase",
				children: "흑자 전환 시뮬레이터"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-3 max-w-2xl font-display text-3xl leading-snug font-semibold tracking-tight md:text-4xl",
				children: [
					"충전량이 적어도,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"몇 개월이면 흑자로 돌아섭니다."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-sm leading-relaxed text-fog",
				children: "초반은 이용이 적어도, 단지 EV가 늘면 충전량은 아파트 통상 수준(월 400~500kWh/기)으로 올라갑니다. 복지형 요금으로도 그 지점에 닿으면 이익이 납니다."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-ink p-5 shadow-border md:p-6 lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => pickModel(m.id),
							className: cn("rounded-xl px-2 py-3 text-center transition-colors duration-150", model === m.id ? "bg-orange text-ink" : "bg-ink-3 text-mist hover:text-paper"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: m.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-0.5 block text-xs tabular-nums opacity-80",
								children: [m.rate, "원"]
							})]
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ClientOnly, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-52 rounded-xl bg-ink-3/50" }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RampControl, {
								label: "충전 요금",
								value: `${rate.toLocaleString("ko-KR")}원/kWh`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 150,
									max: 400,
									step: 5,
									value: [rate],
									onValueChange: (v) => onRate(v[0] ?? 200),
									"aria-label": "충전 요금"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RampControl, {
								label: "충전기 대수",
								value: `${chargers}기`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 1,
									max: 20,
									step: 1,
									value: [chargers],
									onValueChange: (v) => setChargers(v[0] ?? 5),
									"aria-label": "충전기 대수"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RampControl, {
								label: "시작 충전량 / 1기",
								value: `${safeStart.toLocaleString("ko-KR")} kWh`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 100,
									max: 500,
									step: 10,
									value: [startKwh],
									onValueChange: (v) => setStartKwh(v[0] ?? 100),
									"aria-label": "시작 충전량"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RampControl, {
								label: "목표 충전량 / 1기",
								value: `${safeTarget.toLocaleString("ko-KR")} kWh`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 200,
									max: 800,
									step: 10,
									value: [targetKwh],
									onValueChange: (v) => setTargetKwh(v[0] ?? 450),
									"aria-label": "목표 충전량"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RampControl, {
								label: "목표 도달",
								value: `${rampMonths}개월`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 6,
									max: 24,
									step: 1,
									value: [rampMonths],
									onValueChange: (v) => setRampMonths(v[0] ?? 12),
									"aria-label": "목표 도달 개월"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs leading-relaxed text-fog",
						children: "시작량은 적게, 목표는 단지 통상 사용량으로 두었습니다. 충전량이 목표에 선형으로 다가간다고 가정합니다."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-ink p-5 shadow-border md:p-6 lg:col-span-7",
				children: [
					turn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-fog",
							children: "월 손익 흑자 전환"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl tracking-tight text-orange md:text-5xl",
							children: [turn.month, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-2xl text-paper",
								children: "개월 후"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-mist",
							children: [
								"그때 월 충전량",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-paper",
									children: [turn.kwh.toLocaleString("ko-KR"), " kWh/기"]
								}),
								"· 월 손익",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-paper",
									children: signedKrw(turn.monthly)
								})
							]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-fog",
							children: "월 손익 흑자 전환"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl tracking-tight text-paper md:text-4xl",
							children: "24개월 내 전환이 어렵습니다"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mist",
							children: "목표 충전량이나 요금을 조금 높이면 흑자 시점이 앞당겨집니다."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini$1, {
								label: "누적 손익 회복",
								value: recoverMonth ? `${recoverMonth}개월` : "24개월+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini$1, {
								label: "24개월 운영 손익",
								value: last ? signedKrw(last.cumulative) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini$1, {
								label: "24개월 입주민 절감",
								value: last ? krw(last.savedCum) : "—"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 h-52",
						children: chartReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
								data: points,
								margin: {
									top: 8,
									right: 8,
									left: 0,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "rgba(243,239,230,0.06)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tick: {
											fill: MIST,
											fontSize: 11
										},
										axisLine: false,
										tickLine: false,
										ticks: [
											1,
											6,
											12,
											18,
											24
										],
										tickFormatter: (v) => `${v}M`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: {
											fill: MIST,
											fontSize: 11
										},
										axisLine: false,
										tickLine: false,
										width: 56,
										tickFormatter: (v) => Math.abs(v) < 500 ? "0" : `${Math.round(v / 1e4)}만`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "#141716",
											border: "1px solid rgba(255,255,255,0.08)",
											borderRadius: 12,
											fontSize: 12
										},
										formatter: (v, name) => [krw(Number(v ?? 0)), String(name) === "monthly" ? "월 손익" : "누적 손익"],
										labelFormatter: (l) => `${l}개월차`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
										y: 0,
										stroke: "rgba(243,239,230,0.18)"
									}),
									turnMonth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
										x: turnMonth,
										stroke: ORANGE$1,
										strokeDasharray: "4 4",
										strokeOpacity: .7
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "cumulative",
										stroke: ORANGE$1,
										strokeWidth: 2.25,
										dot: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "monthly",
										stroke: MIST,
										strokeWidth: 1.5,
										dot: false
									})
								]
							})
						}) : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-fog",
						children: ["주황: 누적 손익 · 회색: 월 손익 · 점선: 월 흑자 전환", rate < 350 ? ` · 입주민 절감은 시중 350원 대비` : ""]
					})
				]
			})]
		})]
	});
}
function RampControl({ label, value, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-mist",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums text-paper",
				children: value
			})]
		}), children]
	});
}
function Mini$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-ink-3 px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-fog",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 text-sm font-medium tabular-nums",
			children: value
		})]
	});
}
var ORANGE = "#FF7A3A";
function Simulator() {
	const [model, setModel] = (0, import_react.useState)("profit");
	const [rate, setRate] = (0, import_react.useState)(320);
	const [chargers, setChargers] = (0, import_react.useState)(5);
	const [kwh, setKwh] = (0, import_react.useState)(500);
	const [includePg, setIncludePg] = (0, import_react.useState)(false);
	const [chartReady, setChartReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setChartReady(true), []);
	function pickModel(id) {
		const next = MODELS.find((m) => m.id === id);
		setModel(id);
		setRate(next.rate);
	}
	function onRate(next) {
		setRate(next);
		const match = MODELS.find((m) => m.rate === next);
		setModel(match?.id ?? "custom");
	}
	const result = (0, import_react.useMemo)(() => simulate({
		chargers,
		kwh,
		rate,
		includePg
	}), [
		chargers,
		kwh,
		rate,
		includePg
	]);
	const curve = (0, import_react.useMemo)(() => profitCurve(chargers, rate, includePg), [
		chargers,
		rate,
		includePg
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sim",
		className: "bg-ink-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-4 flex items-center gap-3 text-xs tracking-widest text-orange uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm tracking-normal",
							children: "04"
						}), "운영 시뮬레이터"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "max-w-xl font-display text-3xl leading-snug font-semibold tracking-tight md:text-4xl",
						children: [
							"요금을 정하면",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"손익이 바로 보입니다."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-fog",
						children: "사업모델 정책안의 5기 운영 테이블을 보간한 값입니다. 충전기 수·월 사용량·kWh 요금을 바꿔 복지형·수익형을 비교해 보세요."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-xs tracking-widest text-fog uppercase",
					children: "연간 손익"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-ink p-5 shadow-border md:p-6 lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2",
								children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => pickModel(m.id),
									className: cn("rounded-xl px-2 py-3 text-center transition-colors duration-150", model === m.id ? "bg-orange text-ink" : "bg-ink-3 text-mist hover:text-paper"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: m.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-0.5 block text-xs tabular-nums opacity-80",
										children: [m.rate, "원"]
									})]
								}, m.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ClientOnly, {
								fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-40 rounded-xl bg-ink-3/50" }),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
										label: "충전 요금",
										value: `${rate.toLocaleString("ko-KR")}원/kWh`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
											min: 150,
											max: 400,
											step: 5,
											value: [rate],
											onValueChange: (v) => onRate(v[0] ?? 250),
											"aria-label": "충전 요금"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
										label: "충전기 대수",
										value: `${chargers}기`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
											min: 1,
											max: 20,
											step: 1,
											value: [chargers],
											onValueChange: (v) => setChargers(v[0] ?? 5),
											"aria-label": "충전기 대수"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
										label: "월 충전량 / 1기",
										value: `${kwh.toLocaleString("ko-KR")} kWh`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
											min: 100,
											max: 1e3,
											step: 10,
											value: [kwh],
											onValueChange: (v) => setKwh(v[0] ?? 500),
											"aria-label": "월 충전량"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-5 flex items-center gap-2.5 text-sm text-mist",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: includePg,
									onChange: (e) => setIncludePg(e.target.checked),
									className: "size-4 accent-orange"
								}), "PG 위탁 정산 (매출의 5%)"]
							}) }),
							chargers > 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-fog",
								children: [
									"10기 초과분 ",
									chargers - 10,
									"기는 월 1만 원씩 연동 이용료가 반영됩니다."
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-fog",
								children: "10기까지 시스템 연동 이용료는 없습니다."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-ink p-5 shadow-border md:p-6 lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-fog",
									children: "연간 손익"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("font-display text-4xl tracking-tight tabular-nums md:text-5xl", result.profit >= 0 ? "text-orange" : "text-danger"),
									children: signedKrw(result.profit)
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-mist",
									children: ["월 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-paper",
										children: signedKrw(result.monthly)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "매출",
										value: krw(result.revenue)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "전기비",
										value: krw(result.electricity)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "운영·통신·의무",
										value: krw(result.opex)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "플랫폼",
										value: result.platform ? krw(result.platform) : "무료"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "지출 합계",
										value: krw(result.spend)
									}),
									includePg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "PG",
										value: krw(result.pg)
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "PG",
										value: "미적용"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 h-48",
								children: chartReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
										data: curve,
										margin: {
											top: 8,
											right: 8,
											left: 0,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
												id: "profitFill",
												x1: "0",
												y1: "0",
												x2: "0",
												y2: "1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "0%",
													stopColor: ORANGE,
													stopOpacity: .35
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "100%",
													stopColor: ORANGE,
													stopOpacity: 0
												})]
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
												stroke: "rgba(243,239,230,0.06)",
												vertical: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "kwh",
												tick: {
													fill: "#8A918C",
													fontSize: 11
												},
												axisLine: false,
												tickLine: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
												tick: {
													fill: "#8A918C",
													fontSize: 11
												},
												axisLine: false,
												tickLine: false,
												width: 56,
												tickFormatter: (v) => v === 0 ? "0" : `${Math.round(v / 1e4)}만`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
												contentStyle: {
													background: "#141716",
													border: "1px solid rgba(255,255,255,0.08)",
													borderRadius: 12,
													fontSize: 12
												},
												formatter: (v) => [krw(Number(v ?? 0)), "연간 손익"],
												labelFormatter: (l) => `월 ${l} kWh / 기`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
												type: "monotone",
												dataKey: "profit",
												stroke: ORANGE,
												strokeWidth: 2,
												fill: "url(#profitFill)"
											})
										]
									})
								}) : null
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-fog",
								children: "가로축: 월 충전량(kWh/기) · 곡선: 현재 요금의 연간 손익"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakEven, {})
			]
		})
	});
}
function Control({ label, value, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-mist",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums text-paper",
				children: value
			})]
		}), children]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-ink-3 px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-fog",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 text-sm font-medium tabular-nums",
			children: value
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apartment, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Commercial, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Simulator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryDialog, {})
	] });
}
//#endregion
export { Home as component };
