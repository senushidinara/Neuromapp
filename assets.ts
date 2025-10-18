// This file centralizes all image assets for the application.
// Note: Using a combination of local placeholder exports and remote image URLs provided by the user.

import { urban_clinic_img } from './images/urban_clinic';
import { rural_village_img } from './images/rural_village';
import { caregiver_story_img } from './images/caregiver_story';
import { corporate_wellness_img } from './images/corporate_wellness';
import { education_support_img } from './images/education_support';

// Remote images (attachments supplied by the user)
const HOME_HERO = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F76363f4e4e19435cb49a42400de338e8?format=webp&width=800';

const EDU_1 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F65195c096f0d4ac8a349c93f564ad446?format=webp&width=800';
const EDU_2 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Faa37a7a1ae4f4397bcea6d7eecb65071?format=webp&width=800';
const EDU_3 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F713879d8990543d4beb044ddca756800?format=webp&width=800';
const EDU_4 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F2322ff320e4a4a2abb5d664d8f2f5e00?format=webp&width=800';

const DASH_1 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Fe57b078e4c4b44938ddfcfaee4f19ab7?format=webp&width=800';
const DASH_2 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Fc4dec616c8ef4b13b469f2fb1919d1f6?format=webp&width=800';

const RURAL_1 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Fd6529b62f5f24cb39621b94e70a552a3?format=webp&width=800';
const RURAL_2 = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Fafd5811e97104798a5fcb915f4133f2e?format=webp&width=800';

const BRAIN_3D = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F400b0c90816a4f78b746248dc04ce3ba?format=webp&width=800';
const FUTURISTIC_AI = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F75491807bb954126a78d4f114db85f4f?format=webp&width=800';
const AFRICAN_HOLO = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Fdbe2222f56df42a7bfda519d24b96e48?format=webp&width=800';

const NEUROGUARD = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2F0c919f6a62a54548863d6956c47d31c5?format=webp&width=800';
const WEARABLE_APP = 'https://cdn.builder.io/api/v1/image/assets%2F9aaeb95c2c324f08891de9225ad0985f%2Fac0b6b7fe2a84bd7819587c6e5bd8b92?format=webp&width=800';

// Collections / galleries
const EDUCATION_GALLERY = [EDU_1, EDU_2, EDU_3, EDU_4];
const DASHBOARD_GALLERY = [DASH_1, DASH_2];
const RURAL_GALLERY = [RURAL_1, RURAL_2];
const BRAIN_GALLERY = [BRAIN_3D, FUTURISTIC_AI];
const DEVICE_GALLERY = [NEUROGUARD, WEARABLE_APP, AFRICAN_HOLO];

export const IMAGES = {
    urban_clinic: urban_clinic_img,
    rural_village: rural_village_img,
    caregiver_story: caregiver_story_img,
    corporate_wellness: corporate_wellness_img,
    education_support: education_support_img,
    urban_intro: urban_clinic_img,
    rural_intro: rural_village_img,
    caregiver_intro: caregiver_story_img,
    corporate_intro: corporate_wellness_img,
    education_intro: education_support_img,

    // New additions from user-supplied attachments
    home_hero: HOME_HERO,
    education_gallery: EDUCATION_GALLERY,
    dashboard_gallery: DASHBOARD_GALLERY,
    rural_gallery: RURAL_GALLERY,
    brain_gallery: BRAIN_GALLERY,
    device_gallery: DEVICE_GALLERY,
};
