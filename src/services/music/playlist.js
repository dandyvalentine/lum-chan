/**
 * @file Playlist data structure for voice broadcast (radio service).
 * @author Allan D. Boswell
 * @license GPL-3.0
 * @version 2.0.0
 * @description The playlist data structure for the voice broadcast (radio service).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
'use strict';

const path = require('path');
const root = require('app-root-path');

/**
 * Returns an object containing the playlist with individual track information.
 *
 * @since 2.0.0
 * @returns { Object } playlist object
 */
module.exports.playlist = {
  TRACK01: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '01 - Lum no Love Song.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '02:41',
    title_en: 'Lum no Love Song',
    title_jp: 'ラムのラブソング',
    artist_en: 'Yuko Matsutani',
    artist_jp: '松谷祐子'
  },
  TRACK02: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '02 - Uchuu wa Taihen da!.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:26',
    title_en: 'Uchuu wa Taihen da!',
    title_jp: '宇宙は大ヘンだ！',
    artist_en: 'Yuko Matsutani',
    artist_jp: '松谷祐子'
  },
  TRACK03: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '03 - Kokoro Bosoi na.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:31',
    title_en: 'Kokoro Bosoi na',
    title_jp: '心細いな',
    artist_en: 'Helen Sasano',
    artist_jp: 'ヘレン笹野'
  },
  TRACK04: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '04 - Margarita.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:34',
    title_en: 'Margarita',
    title_jp: 'マルガ・リータ',
    artist_en: 'Helen Sasano',
    artist_jp: 'ヘレン笹野'
  },
  TRACK05: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '05 - Hoshizora Cycling.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:31',
    title_en: 'Hoshizora Cycling',
    title_jp: '星空サイクリング',
    artist_en: 'Virgin VS',
    artist_jp: 'ヴァージンVS'
  },
  TRACK06: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '06 - Moonlight Coaster.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:11',
    title_en: 'Moonlight Coaster',
    title_jp: 'ムーンライト・コースター',
    artist_en: 'Virgin VS',
    artist_jp: 'ヴァージンVS'
  },
  TRACK07: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '07 - I, I, You & Ai.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:15',
    title_en: 'I, I, You & Ai',
    title_jp: 'I, I, You & 愛',
    artist_en: 'Izumi Kobayashi',
    artist_jp: '小林泉美'
  },
  TRACK08: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '08 - LOVE GAME.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:06',
    title_en: 'LOVE GAME',
    title_jp: 'LOVE GAME',
    artist_en: 'Izumi Kobayashi',
    artist_jp: '小林泉美'
  },
  TRACK09: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '09 - Kage Fumi no Waltz.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:23',
    title_en: 'Kage Fumi no Waltz',
    title_jp: '影ふみのワルツ',
    artist_en: 'Shiori',
    artist_jp: '詩織'
  },
  TRACK10: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '10 - SING SING FOR ME.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:39',
    title_en: 'SING SING FOR ME',
    title_jp: 'SING SING FOR ME',
    artist_en: 'Shiori',
    artist_jp: '詩織'
  },
  TRACK11: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '11 - Lum no Ballad.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:54',
    title_en: 'Lum no Ballad',
    title_jp: 'ラムのバラード',
    artist_en: 'Fumi Hirano',
    artist_jp: '平野文'
  },
  TRACK12: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '12 - Koi ni Dance! Dance! Dance!.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '02:43',
    title_en: 'Koi ni Dance! Dance! Dance!',
    title_jp: '恋にダンス！ダンス！ダンス！',
    artist_en: 'Fumi Hirano',
    artist_jp: '平野文'
  },
  TRACK13: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '13 - Dancing Star.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:08',
    title_en: 'Dancing Star',
    title_jp: 'Dancing Star',
    artist_en: 'Izumi Kobayashi',
    artist_jp: '小林泉美'
  },
  TRACK14: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '14 - Yume wa Love me more.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '02:47',
    title_en: 'Yume wa Love Me More',
    title_jp: '夢は Love Me More',
    artist_en: 'Izumi Kobayashi',
    artist_jp: '小林泉美'
  },
  TRACK15: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '15 - Ai wa Boomerang.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:58',
    title_en: 'Ai wa Boomerang',
    title_jp: '愛はブーメラン',
    artist_en: 'Yuko Matsutani',
    artist_jp: '松谷祐子'
  },
  TRACK16: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '16 - Nebokemanako.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:21',
    title_en: 'Nebokemanako',
    title_jp: 'ねぼけまなこ',
    artist_en: 'Yuko Matsutani',
    artist_jp: '松谷祐子'
  },
  TRACK17: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '17 - Pajama Jama Da!!.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:41',
    title_en: 'Pajama Jama Da!!',
    title_jp: 'パジャマ・じゃまだ！！',
    artist_en: 'Kanako Narikiyo',
    artist_jp: '成清加奈子'
  },
  TRACK18: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '18 - Oshare Freak.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:26',
    title_en: 'Oshare Freak',
    title_jp: 'おしゃれフリーク',
    artist_en: 'Kanako Narikiyo',
    artist_jp: '成清加奈子'
  },
  TRACK19: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '19 - Koi no Moebius.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:02',
    title_en: 'Koi no Moebius',
    title_jp: '恋のメビウス',
    artist_en: 'Rittsu',
    artist_jp: 'リッツ'
  },
  TRACK20: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '20 - Pajama Jama Da!!.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:30',
    title_en: 'Pajama Jama Da!!',
    title_jp: 'パジャマ・じゃまだ！！',
    artist_en: 'Rittsu',
    artist_jp: 'リッツ'
  },
  TRACK21: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '21 - Fushigi-Kirei.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:20',
    title_en: 'Fushigi・Kirei',
    title_jp: 'ふしぎ・きれい',
    artist_en: 'Fumi Hirano',
    artist_jp: '平野文'
  },
  TRACK22: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '22 - Yasashi Sugiru Keshiki.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:25',
    title_en: 'Yasashi Sugiru Keshiki',
    title_jp: 'やさしすぎる景色',
    artist_en: 'Fumi Hirano',
    artist_jp: '平野文'
  },
  TRACK23: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '23 - Koi no Moebius.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:02',
    title_en: 'Koi no Moebius',
    title_jp: '恋のメビウス',
    artist_en: 'Rittsu',
    artist_jp: 'リッツ'
  },
  TRACK24: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '24 - Midnight Television.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:24',
    title_en: 'Midnight Television',
    title_jp: 'ミッドナイト・テレビジョン',
    artist_en: 'Virgin VS',
    artist_jp: 'ヴァージンVS'
  },
  TRACK25: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '25 - Chance On Love.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:21',
    title_en: 'Chance On Love',
    title_jp: 'Chance On Love',
    artist_en: 'CINDY',
    artist_jp: 'シンディ'
  },
  TRACK26: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '26 - Open Invitation.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:30',
    title_en: 'Open Invitation',
    title_jp: 'Open Invitation',
    artist_en: 'CINDY',
    artist_jp: 'シンディ'
  },
  TRACK27: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '27 - Born To Be Free.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:51',
    title_en: 'Born To Be Free',
    title_jp: 'ボーン・トゥ・ビー・フリー',
    artist_en: 'Steffanie',
    artist_jp: 'ステファニー'
  },
  TRACK28: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '28 - Remember My Love.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:26',
    title_en: 'Remember My Love',
    title_jp: 'リメンバー・マイ・ラヴ',
    artist_en: 'Steffanie',
    artist_jp: 'ステファニー'
  },
  TRACK29: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '29 - Rock The Planet.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:28',
    title_en: 'Rock The Planet',
    title_jp: 'ロック・ザ・プラネット',
    artist_en: 'Steffanie',
    artist_jp: 'ステファニー'
  },
  TRACK30: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '30 - Every Day.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:27',
    title_en: 'Every Day',
    title_jp: 'エヴリディ ステファニー',
    artist_en: 'Steffanie',
    artist_jp: 'ステファニー'
  },
  TRACK31: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '31 - Tonogata Gomen Asobase.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:19',
    title_en: 'Tonogata Gomen Asobase',
    title_jp: '殿方ごめん遊ばせ',
    artist_en: 'Shoko Minami',
    artist_jp: '南翔子'
  },
  TRACK32: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '32 - Good Luck ~Eien Yori Ai o Komete~.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:53',
    title_en: 'Good Luck ~Eien Yori Ai wo Komete~',
    title_jp: 'Good Luck　~永遠より愛をこめて~',
    artist_en: 'Shoko Minami',
    artist_jp: '南翔子'
  },
  TRACK33: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '33 - Half Moon wa Tokimeki Iro.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:19',
    title_en: 'Half Moon wa Tokimeki Iro',
    title_jp: 'ハーフムーンはときめき色',
    artist_en: 'Shoko Minami',
    artist_jp: '南翔子'
  },
  TRACK34: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '34 - Matsurika Yoru -Jasmine Night-.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:22',
    title_en: 'Matsurika Yoru -Jasmine Night-',
    title_jp: '茉莉花・夜　-ジャスミン・ナイト-',
    artist_en: 'Shoko Minami',
    artist_jp: '南翔子'
  },
  TRACK35: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '35 - Triangle Love Letter.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:11',
    title_en: 'Triangle Love Letter',
    title_jp: 'トライアングル ラブレター',
    artist_en: 'Maruko Matsushita',
    artist_jp: '松下丸子'
  },
  TRACK36: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '36 - Dream Forever.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:42',
    title_en: 'Dream Forever',
    title_jp: 'ドリーム フォーエバー',
    artist_en: 'Sayuri Setoguchi',
    artist_jp: '瀬戸口さゆり'
  },
  TRACK37: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '37 - Melancholy no Kiseki.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:55',
    title_en: 'Melancholy no Kiseki',
    title_jp: 'メランコリーの軌跡',
    artist_en: 'Kayoko Matsunaga',
    artist_jp: '松永夏代子'
  },
  TRACK38: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '38 - Sayonara Bobby.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:51',
    title_en: 'Sayonara Bobby',
    title_jp: 'さよならボビー',
    artist_en: 'Kayoko Matsunaga',
    artist_jp: '松永夏代子'
  },
  TRACK39: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '39 - A-RI-GA-TO!.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:56',
    title_en: 'A・RI・GA・TO!',
    title_jp: 'ア・リ・ガ・ト！',
    artist_en: 'Urusei Yatsura All-Stars',
    artist_jp: 'うる星やつらオールスターズ'
  },
  TRACK40: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '40 - Hoshi no Memory.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:57',
    title_en: 'Hoshi no Memory',
    title_jp: '星のメモリー',
    artist_en: 'Urusei Yatsura All-Stars',
    artist_jp: 'うる星やつらオールスターズ'
  },
  TRACK41: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '41 - Sweet Dream.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:19',
    title_en: 'Sweet Dream',
    title_jp: 'Sweet Dream',
    artist_en: 'Kanako Narikiyo',
    artist_jp: '成清加奈子'
  },
  TRACK42: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '42 - Romance ga Itai.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:37',
    title_en: 'Romance ga Itai',
    title_jp: 'ロマンスが痛い',
    artist_en: 'Kanako Narikiyo',
    artist_jp: '成清加奈子'
  },
  TRACK43: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '43 - Monotone no Yatsu.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:00',
    title_en: 'Monotone no Yatsu',
    title_jp: 'モノトーンの夏',
    artist_en: 'Kayoko Matsunaga',
    artist_jp: '松永夏代子'
  },
  TRACK44: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '44 - Jounetsu no Azalea.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:43',
    title_en: 'Jounetsu no Azalea',
    title_jp: '情熱のアゼリア',
    artist_en: 'Kayoko Matsunaga & Kanako Narikiyo',
    artist_jp: '松永夏代子・成清加奈子'
  },
  TRACK45: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '45 - SORRY....mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '03:39',
    title_en: 'SORRY...',
    title_jp: 'SORRY...',
    artist_en: 'Kanako Narikiyo',
    artist_jp: '成清加奈子'
  },
  TRACK46: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '46 - I Love You Lum.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:15',
    title_en: 'I Love You Lum',
    title_jp: 'I Love You Lum',
    artist_en: 'Kayoko Matsunaga & Kanako Narikiyo',
    artist_jp: '成清加奈子・松永夏代子'
  },
  TRACK47: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '47 - Suki-Kirai.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:02',
    title_en: 'Suki Kirai',
    title_jp: 'Suki Kirai',
    artist_en: 'Hanako Asada',
    artist_jp: '麻田華子'
  },
  TRACK48: {
    path:
      `${root}` +
      path.sep +
      'assets' +
      path.sep +
      'Urusei Yatsura - CD Single Memorial File' +
      path.sep +
      '48 - Kimi ga Wakaru yo.mp3',
    rate: '320kbps',
    year: '1988',
    cover: `${root}/assets/Urusei Yatsura - CD Single Memorial File/album_cover.jpg`,
    album_en: 'CD Single Memorial File',
    album_jp: 'CDシングル・メモリアル・ファイル',
    duration: '04:14',
    title_en: 'Kimi ga Wakaru yo',
    title_jp: 'キミがわかるよ',
    artist_en: 'Hanako Asada',
    artist_jp: '麻田華子'
  }
};
