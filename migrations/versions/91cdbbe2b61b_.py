"""empty message

Revision ID: 91cdbbe2b61b
Revises: 7a413ae44ca7
Create Date: 2024-12-17 03:07:55.276358

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '91cdbbe2b61b'
down_revision = '7a413ae44ca7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('first_name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('last_name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('birth_date', sa.Date(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('birth_date')
        batch_op.drop_column('last_name')
        batch_op.drop_column('first_name')

    # ### end Alembic commands ###