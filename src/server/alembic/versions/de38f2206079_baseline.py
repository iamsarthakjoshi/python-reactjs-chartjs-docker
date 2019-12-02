"""baseline

Revision ID: de38f2206079
Revises: 
Create Date: 2019-12-01 13:31:55.673685

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'de38f2206079'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
  op.create_table(
    'data',
    sa.Column('id', sa.Integer, primary_key=True),
    sa.Column('date', sa.Date()),
    sa.Column('amount', sa.Integer),
    sa.Column('group', sa.Integer)
  )



def downgrade():
  op.drop_table('data')
