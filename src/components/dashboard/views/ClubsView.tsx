import React from 'react';
import { useDashboard } from '../../../contexts/DashboardContext';
import { clubs } from '../../../data/clubs';
import { playerNames } from '../../../data/content';
import { clubRank } from '../../../utils/football';
import { ClubBadge } from '../ClubBadge';
import { DataCard } from './DataCard';
import { Donut } from '../../charts/Donut';
import { LineupPitch } from '../../charts/LineupPitch';
const roleFor = (i: number) => i === 0 ? 'Goalkeeper' : i < 5 ? 'Defender' : i < 8 ? 'Midfielder' : 'Forward';
const numbers = [1, 2, 4, 5, 3, 6, 8, 10, 7, 9, 11];
export function ClubsView() {
  const {
    clubId,
    setClubId
  } = useDashboard();
  const club = clubs[clubId];
  return <div className="flex flex-col gap-5 px-6 pb-8">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {clubs.map((c) => <button key={c.id} onClick={() => setClubId(c.id)} aria-label={`View ${c.name}`} className={`flex shrink-0 items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${c.id === clubId ? 'border-wm-lime/25 bg-wm-lime/[0.08] text-wm-text' : 'border-white/[0.08] text-wm-muted hover:text-wm-text'}`}>
          
            <ClubBadge clubId={c.id} />
            <span>{c.name}</span>
          </button>)}
      </div>

      <div className="relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 p-4" style={{
      background: "linear-gradient(110deg, rgba(200,255,54,.12), transparent), url('https://cdn.magicpatterns.com/patterns/generated-images/4a343f31-f80c-4c16-8327-ef0a52bb5dba.jpg') center 60% / cover"
    }}>
        
        <div className="absolute inset-0 bg-[rgba(7,10,9,.78)]" />
        <div className="relative flex items-center gap-4">
          <ClubBadge clubId={club.id} size="large" />
          <div>
            <h3 className="text-lg font-medium text-[#eff4f0]">{club.name} VFC</h3>
            <p className="text-sm text-wm-muted">{club.location}</p>
            <small className="text-xs text-wm-muted-2">{club.league}</small>
          </div>
        </div>
        <div className="relative ml-auto flex gap-6 text-center">
          <span>
            <strong className="block text-xl text-[#d8ff74]">{club.w}</strong>
            <small className="text-[10px] text-wm-muted">Wins</small>
          </span>
          <span>
            <strong className="block text-xl text-[#d8ff74]">{club.d}</strong>
            <small className="text-[10px] text-wm-muted">Draws</small>
          </span>
          <span>
            <strong className="block text-xl text-[#d8ff74]">{club.l}</strong>
            <small className="text-[10px] text-wm-muted">Losses</small>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DataCard title="Recent form">
          <Donut club={club} />
        </DataCard>
        <DataCard title="Starting eleven">
          <LineupPitch clubId={club.id} compact />
        </DataCard>
        <DataCard title="Player roster" wide note="4–3–3 · Virtual squad">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {playerNames.map((name, i) => <div key={name} className="flex items-center gap-3 rounded-lg border border-white/[0.06] px-3 py-2">
                <span className="w-5 shrink-0 text-xs text-wm-muted-2">{numbers[i]}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-[10px] font-semibold text-wm-text">
                  {name.slice(0, 2).toUpperCase()}
                </span>
                <strong className="flex-1 truncate text-sm text-wm-text">{name}</strong>
                <small className="text-xs text-wm-muted">{roleFor(i)}</small>
              </div>)}
          </div>
        </DataCard>
        <DataCard title="Winmix Arena">
          <strong className="block text-2xl text-wm-text">42,850</strong>
          <p className="text-sm text-wm-muted">Virtual attendance</p>
          <small className="text-xs text-wm-muted-2">18.1°C · Clear sky · Demo conditions</small>
        </DataCard>
        <DataCard title="Head coach">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-semibold text-wm-text">AM</span>
            <div>
              <strong className="block text-sm text-wm-text">Alex Morgan</strong>
              <small className="text-xs text-wm-muted">Virtual squad manager</small>
            </div>
          </div>
          <p className="mt-3 text-sm text-wm-muted">High press · possession play</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-wm-muted">
            <span>
              Formation <b className="text-wm-text">4–3–3</b>
            </span>
            <span>
              Club position <b className="text-wm-text">{clubRank(club.league, club.id)}</b>
            </span>
          </div>
        </DataCard>
      </div>
    </div>;
}