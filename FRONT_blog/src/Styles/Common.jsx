// src/styles/common.js
// Theme: WordPress Create Blog — white background, #1e1e1e text, #3858e9 accent
// Inspired by wordpress.com/create-blog — minimal, modern, bold typography & spacing

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-white min-h-screen";
export const pageWrapper = "max-w-6xl mx-auto px-6 py-16";
export const section = "mb-16";

// ─── Navigation ───────────────────────────────────────
export const navbarClass = "border-b border-[#e5e5e5] bg-white sticky top-0 z-50";
export const navContainerClass = "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between";
export const navBrandClass = "text-xl font-bold tracking-tight text-[#1e1e1e]";
export const navLinksClass = "flex items-center gap-6";
export const navLinkClass = "text-sm font-medium text-[#555] hover:text-[#3858e9] transition-colors";
export const navLinkActiveClass = "text-sm font-medium text-[#3858e9]";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl p-8 hover:shadow-md transition cursor-pointer";
export const articleCardClass =
  "bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl p-6 hover:shadow-md transition";
export const articleTitle = "text-base font-semibold text-[#1e1e1e] leading-snug";
export const articleExcerpt = "text-sm text-[#555] leading-relaxed";
export const articleMeta = "text-xs uppercase tracking-wide text-[#888]";
export const emptyStateClass =
  "rounded-xl border border-dashed border-[#d9d9d9] bg-[#fafafa] px-6 py-10 text-center text-sm text-[#666]";
export const articleStatusActive =
  "absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700";
export const articleStatusDeleted =
  "absolute right-4 top-4 rounded-full bg-red-100 px-3 py-1 text-[11px] font-semibold text-red-700";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass =
  "text-5xl font-bold text-[#1e1e1e] tracking-tight leading-tight mb-4";
export const headingClass =
  "text-2xl font-semibold text-[#1e1e1e] tracking-tight";
export const subHeadingClass =
  "text-lg font-medium text-[#1e1e1e] tracking-tight";
export const bodyText = "text-[#555] leading-relaxed";
export const mutedText = "text-sm text-[#888]";
export const linkClass =
  "text-[#3858e9] hover:text-[#2c46b5] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#3858e9] text-white font-semibold px-6 py-2.5 rounded-md hover:bg-[#2c46b5] transition text-sm";
export const secondaryBtn =
  "border border-[#ddd] text-[#1e1e1e] font-medium px-6 py-2.5 rounded-md hover:bg-[#f9f9f9] transition text-sm";
export const ghostBtn =
  "text-[#3858e9] font-medium hover:text-[#2c46b5] transition text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard =
  "bg-[#f9f9f9] rounded-xl p-10 max-w-3xl mx-auto border border-[#e5e5e5]";
export const formTitle =
  "text-2xl font-bold text-[#1e1e1e] text-center mb-6";
export const labelClass =
  "text-xs font-medium text-[#555] mb-2 block";
export const inputClass =
  "w-full bg-white border border-[#ddd] rounded-md px-4 py-2 text-[#1e1e1e] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#3858e9] focus:ring-2 focus:ring-[#3858e9]/20 transition";
export const formGroup = "mb-5";
export const divider = "border-t border-[#e5e5e5] my-5";
export const errorClass = "text-xs text-red-600 mt-1";
export const submitBtn =
  "w-full bg-[#3858e9] text-white font-semibold py-2.5 rounded-md hover:bg-[#2c46b5] transition mt-2 text-sm";
export const loadingClass = "text-sm text-[#666] mt-4 text-center";

// ─── Article page ─────────────────────────────────────
export const articlePageWrapper = "max-w-4xl mx-auto px-6 py-10";
export const articleHeader = "mb-8 border-b border-[#e5e5e5] pb-6";
export const articleCategory = "inline-flex rounded-full bg-[#3858e9]/10 px-3 py-1 text-xs font-semibold text-[#3858e9]";
export const articleMainTitle = "mt-4 text-4xl font-bold tracking-tight text-[#1e1e1e]";
export const articleAuthorRow = "mt-4 flex items-center justify-between gap-4 text-sm text-[#666]";
export const authorInfo = "font-medium text-[#1e1e1e]";
export const articleContent = "prose prose-neutral max-w-none text-[#333]";
export const articleFooter = "mt-10 border-t border-[#e5e5e5] pt-4 text-xs text-[#888]";
export const articleActions = "mt-8 flex items-center gap-3";
export const editBtn = "rounded-md bg-[#3858e9] px-4 py-2 text-sm font-medium text-white hover:bg-[#2c46b5]";
export const deleteBtn = "rounded-md bg-[#ff3b30] px-4 py-2 text-sm font-medium text-white hover:bg-[#d62c23]";
export const commentsWrapper = "mt-10 space-y-4";
export const commentCard = "rounded-xl border border-[#e5e5e5] bg-white p-4";
export const commentHeader = "mb-3 flex items-center justify-between";
export const commentUserRow = "flex items-center gap-3";
export const avatar = "flex h-9 w-9 items-center justify-center rounded-full bg-[#3858e9]/10 text-sm font-semibold text-[#3858e9]";
export const commentUser = "text-sm font-medium text-[#1e1e1e]";
export const commentTime = "text-xs text-[#888]";
export const commentText = "text-sm leading-relaxed text-[#333]";

//