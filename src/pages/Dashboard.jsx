import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, GraduationCap, TrendingUp, CloudSun, MoreHorizontal } from 'lucide-react';
import Chatbot from '../components/Chatbot';

const mockData = [
  { name: 'Jan', students: 400 },
  { name: 'Feb', students: 600 },
  { name: 'Mar', students: 800 },
  { name: 'Apr', students: 1200 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <div>
          <h1>Welcome, Criztyl!</h1>
          <p style={{ color: '#888' }}>Here's what's happening today.</p>
        </div>
        <div className="weather-widget">
          <CloudSun size={20} color="#ff85a1" />
          <span style={{ fontWeight: '600' }}>28°C - Tagum City</span>
        </div>
      </header>

      <div className="stats-grid">
        <StatCard icon={<Users color="#c9184a"/>} title="Total Students" value="1,284" />
        <StatCard icon={<BookOpen color="#c9184a"/>} title="Active Courses" value="42" />
        <StatCard icon={<GraduationCap color="#c9184a"/>} title="New Enrollments" value="156" />
        <StatCard icon={<TrendingUp color="#c9184a"/>} title="Monthly Growth" value="24%" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="chart-card">
          <h3 style={{ marginBottom: '1.5rem' }}>Student Population Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={mockData}>
              <XAxis dataKey="name" stroke="#ccc" />
              <Tooltip />
              <Area type="monotone" dataKey="students" stroke="#ff4d6d" fill="#ffb1bd" fillOpacity={0.4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Students</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '10px', borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ width: '40px', height: '40px', background: '#ff85a1', borderRadius: '50%' }}></div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>Student Name {i}</p>
                  <p style={{ fontSize: '0.8rem', color: '#aaa' }}>BS Information Tech</p>
                </div>
                <MoreHorizontal size={16} color="#ccc" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="stat-card">
    <div style={{ background: '#fff0f3', padding: '12px', borderRadius: '15px' }}>{icon}</div>
    <div>
      <p style={{ fontSize: '0.85rem', color: '#888', fontWeight: '500' }}>{title}</p>
      <h3 style={{ fontSize: '1.5rem', color: '#590d22' }}>{value}</h3>
    </div>
  </div>
);

export default Dashboard;